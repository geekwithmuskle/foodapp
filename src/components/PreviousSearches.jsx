import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const PreviousSearches = ({searches}) => {
    return (
        <div className="previous-searches">

            <h2>Previous Searches</h2>
            <div className="previous-searches-container section">
                {searches.map((search, i) => (
                    <div key={i} className='search-items' style={{ animationDelay: i * .1 + "s" }}>
                        {search}
                    </div>
                ))}
            </div>

            <div className="search-box">
                <input type="text" placeholder="Search..." />
                <button className="btn"> <FontAwesomeIcon icon={faSearch} /></button>
            </div>
        </div>

    )
}

export default PreviousSearches