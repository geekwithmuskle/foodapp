import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';


const ChiefsCard = ({chief}) => {
  
  return (
    <div className='chiefscard'>

        <img src={chief.imag} alt={chief.nae}  />
        <div className="chiefscard-info">
            <h3 className="chiefscard-name">{chief.name}</h3>
            <p className="chiefscard-receipt-count">{chief.recipesCount}</p>
            <p className="chiefscard-cuisine">{chief.cuisine}</p>
            <p className="chiefscard-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            </p>
        </div>
    </div>
  )
}

export default ChiefsCard