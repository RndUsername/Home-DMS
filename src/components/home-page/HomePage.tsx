'use client'

import { useEffect, useState, type FC } from 'react';
import GoToNew from './GoToNew';
import Documents from './Documents';
import Icon from '../../images/Icon.svg';
import Searchbar from './Searchbar';
import { useQuery } from '@tanstack/react-query';
import pb from '../../lib/pocketbase';
import { ExpandedDoc, filterDocuments } from '../../lib/document/service';


const HomePage: FC = (props) => {
    const [searchbarValue, setSearchbarValue] = useState('');
    const [search, setSearch] = useState('');

    const documents = useQuery({ 
        queryFn: () => pb
            .collection('documents')
            .getFullList<ExpandedDoc>({ 
                expand: 'pages,tags', 
                sort: '-uploadedAt'
            }),
        queryKey: ['documents', search]
    });
    const [filteredDocuments, setFilteredDocuments] = useState(documents.data);

    useEffect(() => {
        if(documents.data === undefined){
            setFilteredDocuments(undefined)
            return
        }
        setFilteredDocuments(filterDocuments(documents.data, search))
    }, [documents, search]);

    function onSearch(query: string){
        setSearchbarValue(query)

        if(query === ''){
            setSearch('');
            return;
        }
        if(query === query.trim()) return;
        setSearch(query)
    }
    
    return (
        <div className='grid grid-rows-[auto_1fr] h-screen bg-gray-900'>
			<header className="bg-gray-800 px-5 py-3 flex gap-5 shadow-lg">
				<img src={ Icon } alt="Home-DMS Logo" className="w-8" />
				<Searchbar value={ searchbarValue } onChange={ onSearch } onSubmit={ setSearch }/>
			</header>
			<main className='overflow-y-auto'>
				{ filteredDocuments && 
                    <Documents
                        documents={ filteredDocuments } 
                        onTagClick={ keyword => 
                            setSearchbarValue(v => {
                                const query = v
                                    ? `${searchbarValue} ${keyword}`
                                    : keyword;
                                setSearch(query);
                                return query;
                            })
                        }
                    />
                }
				<GoToNew className='absolute bottom-8 right-8 shadow'/>
			</main>
		</div>
    );
};

export default HomePage;