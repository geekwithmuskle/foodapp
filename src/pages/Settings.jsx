import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
  return (
    <div>
      <div className="section d-block">

        <h2>Preferred Theme</h2>

        <div className="options-container">
          <div className="option light">
            <div className="check">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>

          <div className="option darke">
            <div className="check">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings