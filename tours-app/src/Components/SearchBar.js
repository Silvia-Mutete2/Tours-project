import React, {useState} from 'react'
import SearchPage from './SearchPage'

function SearchBar() {
    const [searchInput, setSearchInput] = useState('')

    const handleSearchPage = (e) => {
        setSearchInput(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div>
            <input className='search' placeholder='Search Tours' onChange={handleSearchPage}></input>
            <button className='search' >Search</button>
            {searchInput ? <SearchPage /> : null}
        </div>
    )
}

export default SearchBar