import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {

  const [settings, setSettings] = useState({
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--shadow-color": "rgba(0, 0, 0, 0.2)",
    "--primary-color": "rgb(255, 0, 86)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1
  })

  useEffect(() => {
    const root = document.documentElement
    for(let key in settings){
      root.style.setProperty(key, settings[key])
    }
  }, [settings])

  const themes = [
    {
     "--background-color": "#fff",
    "--background-light": "#fff",
    "--shadow-color": "rgba(0, 0, 0, 0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757", 
    },

    {
      "--background-color": "rgb(29, 29, 29)",
      "--background-light": "rgb(77, 77, 77)",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#ffffffff",
      "--text-light": "#eceaea",
    }
  ]

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
      value: "16px"
    },

    {
      title: "Large",
      value: "20px"
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

  function changeTheme(i){
    const _theme = {...themes[i]};
    setTheme(i == 0 ? "light" : "dark")

    //update settings
    let _settings = {...settings}
    for(let key in _theme){
      _settings[key] = _theme[key]
    }
    setSettings(_settings)
  }

  function changeColor(i) {

    const _color = primaryColors[i];
    let _settings = {...settings}
    _settings["--primary-color"] = _color;
    setPrimaryColor(i);
    setSettings(_settings);
  }

  function changeFontSize(i){
    
    const _size = fontSizes[i];
    let _settings = {...settings}
    _settings["--font-size"] = _size.value
    setFontSize(i);
    setSettings(_settings)
  }

  function changeAnimationSpeed(i){

    let _speed = animationSpeeds[i]
    let _settings = {...settings}
    _settings["--animation-speed"] = _speed.value
    setAnimationSpeed(i)
    setSettings(_settings)
  }
  
  return (
    <div>
      {/* ----------Section 1--------------- */}
      <div className="section d-block">

        <h2>Primary Theme</h2>

        <div className="options-container">

          <div className="option light" onClick={() => changeTheme(0)}>
           {
            theme === "light" && (
              <div className="check">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            )
           }
          </div>

          <div className="option dark" onClick={() => changeTheme(1)}>
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

        <h2>Preferred Colors</h2>

        <div className="options-container">

          {primaryColors.map((color, index) => (
             <div key={index} className="option dark" onClick={() => changeColor(index)} style={{backgroundColor: color}} >
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
            <button className='btn' key={index} onClick={() => changeFontSize(index)}>
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
              <button className="btn" key={index} onClick={() => changeAnimationSpeed(index)}>
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