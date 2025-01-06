'use client'

import { useCallback, useState, type FC } from 'react';
import { DocumentPreview } from '../../lib/document/actions';
import GoToNew from './GoToNew';
import Documents from './Documents';
import Icon from '../../images/Icon.svg';
import Searchbar from './Searchbar';
import { useDocuments } from '../../lib/document/hooks';
import { useQuery } from '@tanstack/react-query';
import pb from '../../lib/pocketbase';

interface HomePageProps {
}

const HomePage: FC<HomePageProps> = (props) => {
    const [searchbarValue, setSearchbarValue] = useState('');
    const [search, setSearch] = useState('');

    const documents = useQuery({ 
        queryFn: () => pb
            .collection('documents')
            .getFullList(),
        queryKey: ['file-list']
    });

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
				{ documents.data && 
                    <Documents 
                        documents={ documents } 
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