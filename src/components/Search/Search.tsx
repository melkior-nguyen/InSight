import React from 'react'
import './search.css'

function Search(props: any) {
    const handleSearch = props.OnChange

    return (
        <div className='search'>
            <input type="text" placeholder={props.plholder} onChange={(e)=> handleSearch(e.target.value)}/>
            <div className="search_icon">
                {props.icon}
            </div>
        </div>
    )
}

export default Search
