import pb from "../pocketbase";
import { Expanded } from "../pocketbase/helper-types";
import { DocumentsResponse, PagesRecord, TagsRecord, Collections } from "../pocketbase/pb-types";

export type ExpandedDoc = Expanded<
    DocumentsResponse<unknown>,
    {
        pages: PagesRecord[],
        tags: TagsRecord[]
    }
>

export type TagType = { id?: string, keyword: string }
export type PageType = { id: string, url: string, file?: File }

export interface UpdateDocumentOptions {
    tags: TagType[],
    pages: PageType[]
}


export async function updateDocument(document: ExpandedDoc, options: UpdateDocumentOptions){
    // update tags
    const updatedTagIds = await Promise.all(options.tags.map(tag => {
        if(tag.id !== undefined) return tag.id;

        return pb.collection('tags')
            .create({ keyword: tag.keyword }, { fields: 'id' })
            .then(tag => tag.id);
    }))

    // update pages
    const updatedPageIds: string[] = []
    for(const page of options.pages){
        if(page.file === undefined){
            updatedPageIds.push(page.id)
        } else {
            updatedPageIds.push(await pb
                .collection('pages')
                .create({ file: page.file }, { fields: 'id' })
                .then(tag => tag.id)
            )
        }
    }

    // update document
    const updatedDocument = await pb.collection('documents').update(document.id, {
        tags: updatedTagIds,
        pages: updatedPageIds
    }, { expand: 'tags,pages' })

    // delete removed pages when in prod
    if(import.meta.env.PROD){
        const removedPages = document.pages.filter(id => options.pages.every(page => page.id !== id))
        await Promise.all(removedPages.map(page => pb.collection('pages').delete(page)))
    }

    return updatedDocument as ExpandedDoc
}


export async function deleteDocument(document: ExpandedDoc) {
    await pb.collection('documents').delete(document.id);

    // during testing, the pages got multiple documents, so the should only be deleted in prod
    if(import.meta.env.PROD){
        const batch = pb.createBatch();
        document.pages.map(id => batch.collection(Collections.Pages).delete(id))
        await batch.send()
    }
}


export async function addDocument(tags: TagType[], pages: File[]) {
    // add tags
    const tagBatch = pb.createBatch()
    tags.forEach(tag => 
        tagBatch
            .collection(Collections.Tags)
            .create(
                tag, 
                { fields: 'id' }
            )
    )
    const addedTagIds = await tagBatch.send().then(r => r.map(r => (r.body as TagsRecord).id))

    // add pages
    const addedPageIds: string[] = []
    for(const page of pages){
        await pb
            .collection('pages')
            .create(
                { file: page }, 
                { fields: 'id' }
            )
            .then(p => addedPageIds.push(p.id))
    }

    // add document
    await pb
        .collection('documents')
        .create({
            pages: addedPageIds,
            tags: addedTagIds
        })
}

export function filterDocuments(documents: ExpandedDoc[], searchQuery: string){
    if(!searchQuery) return documents

    return documents.filter(doc => 
        searchQuery.trim().toLowerCase().split(' ').every(query => 
            doc.expand.tags.some(({ keyword }) => 
                keyword.toLowerCase() === query
            )
        )
    );
}