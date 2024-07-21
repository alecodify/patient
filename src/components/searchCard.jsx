import React from 'react';
import "../styles/search.scss";

const SearchCard = ({name, title, image}) => {
    return (
        <li>
            <img className='search-card-image' src={image} alt={name} />
            <span className="search-card-info">
                <h3>{name}</h3>
                <p>{title}</p>
            </span>
        </li>
    )
}

export default SearchCard