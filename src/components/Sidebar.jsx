import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Sidebar = ({links, close}) => {
  return (

    <div className="sidebar" onClick={close}> 
        { links.map(link => (
            <a className="sidebar-link" href="#!" key={link.name}>
            {/* {link.icons}  */}
            <FontAwesomeIcon icon={link.icons}/>
            {link.name} 
            </a>
        ))}
    </div>
  )
}

export default Sidebar