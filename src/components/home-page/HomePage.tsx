'use client'

import { useState, type FC } from 'react';
import { DocumentPreview } from '../../lib/document/actions';
import GoToNew from './GoToNew';
import Documents from './Documents';
import Icon from '../../images/Icon.svg';
import Searchbar from './Searchbar';
import { useDocuments } from '../../lib/document/hooks';

interface HomePageProps {
    documents: DocumentPreview[]
}

const HomePage: FC<HomePageProps> = (props) => {
    const [search, setSearch] = useState('');

    const documents = useDocuments(props.documents, search);

    function onSearch(query: string){
        if(query === ''){
            setSearch('');
            return;
        }
        if(query === query.trim()) return;
        setSearch(query)
    }
    
    return (
        <div className='grid grid-rows-[auto_1fr] h-screen'>
			<header className="bg-gray-800 px-5 py-3 flex gap-5 shadow-lg">
				<img src={ Icon } alt="Home-DMS Logo" className="w-8" />
				<Searchbar onChange={ onSearch } onSubmit={ setSearch }/>
			</header>
			<main className='overflow-y-auto'>
				<Documents documents={ documents }/>
				<GoToNew className='absolute bottom-8 right-8'/>
			</main>
		</div>
    );
};

export default HomePage;