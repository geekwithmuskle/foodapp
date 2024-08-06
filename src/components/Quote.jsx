import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Quote = () => {
  return (
    <div className='section quote'>
    
        <div className="quote-col">
        <FontAwesomeIcon icon={faQuoteLeft} />
        <p className="quote-text">       
            Food is everything we are. It's an extension of nationalist feeling, ethnic feeling, your personal feeling, your personal history, your province, your region, your tribe, your grandma. It's inseparable from those from the get-go.
        </p>
        <FontAwesomeIcon icon={faQuoteRight} />
        </div>
        

        <p className="quote-author">- Anthony Bourdain</p>
        
    </div>
  )
}

export default Quote