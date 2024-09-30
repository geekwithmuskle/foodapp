import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {

  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)"
  ]

  const fontSizes = [
    {
      title: "Small",
      value: "12px"
    },

    {
      title: "Medium",
      value: "12px"
    },

    {
      title: "Large",
      value: "12px"
    }
  ]

  const animationSpeeds = [

    {
      title: "Slow",
      value: 2
    },
    {
      title: "Medium",
      value: 1
    },
    {
      title: "Slow",
      value: .5
    }
  ]

  const [theme, setTheme] = useState("light");
  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSize, setFontSize] = useState(1);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  
  return (
    <div>
      {/* ----------Section 1--------------- */}
      <div className="section d-block">

        <h2>Preferred Theme</h2>

        <div className="options-container">

          <div className="option light">
           {
            theme === "light" && (
              <div className="check">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            )
           }
          </div>

          <div className="option dark">
            {
              theme === "dark" && (
                <div className="check">
              <FontAwesomeIcon icon={faCheck} />
            </div>
              )
            }
          </div>
        </div>
      </div>

      {/* ----------Section 2--------------- */}

      <div className="section d-block">

        <h2>Primary Colors</h2>

        <div className="options-container">

          {primaryColors.map((color, index) => (
             <div className="option dark" style={{backgroundColor: color}}>
             {
               primaryColor === index && (
                 <div className="check">
               <FontAwesomeIcon icon={faCheck} />
             </div>
               )
             }
           </div>
          ))}
        </div>
      </div>

      {/* ----------Section 3--------------- */}

      <div className="section d-block">

        <h2>Font Sizes</h2>

        <div className="options-container">

          {fontSizes.map((font, index) => (
            <button className='btn'>
              <span>{font.title}</span>
             {fontSize === index && <span> <FontAwesomeIcon icon={faCheck} /> </span>}
            </button>
          ))}
        </div>
      </div>

      {/* ----------Section 4--------------- */}
      <div className="section d-block">

        <h2>Animation Speed</h2>

        <div className="options-container">

            {animationSpeeds.map((anime, index) => (
              <button className="btn">
                {anime.title}
                {animationSpeed === index && <span> <FontAwesomeIcon icon={faCheck} /> </span>}
              </button>
            ))}

        </div>
      </div>
    </div>
  )
}

export default Settings