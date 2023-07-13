import React from 'react'
import './search.css'

function Search(props: any) {
    return (
        <div className='search'>
            <input type="text" placeholder={props.plholder} />
            <div className="search_icon">
                {props.icon}
            </div>
        </div>
    )
}

export default Search
