    'use client'
    
    import './searchInp.css';
    import { Search } from 'lucide-react';
    import { Noto_Serif_Display } from 'next/font/google';

    import { useState } from 'react';

    const notoSerifDisplay = Noto_Serif_Display({ 
      subsets: ['latin'] 
    });
    

    const SearchInp = ( props ) => {
        let { handleSearch } = props;
        const [ searchVal, setSearchVal ] = useState('');
        
        return (
            <div className='search_box'>
                <input 
                 type="search"
                 className={`search_inp ${notoSerifDisplay.className}`}
                 placeholder='Search'
                 onChange={(e)=>{setSearchVal(e.target.value)}}
                />
                <button onClick={() => handleSearch(searchVal)} className='search_btn'>
                    <Search
                     size={24}
                    />
                </button>
            </div>
        )
    }

    export default SearchInp;