import React, {useState} from 'react'
import Sidebar from './Sidebar';

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {

const [showSideBar, setShowSideBar] = useState(false);

const links = [
  {
    name: "Home",
    path: "/",
    icons: faHome
  },
  {
    name: "Recipes",
    path: "/recipes",
    icons: faList
  },
  {
    name: "Settings",
    path: "/settings",
    icons: faCog
  }
]

function closeSideBar(){
  setShowSideBar(false);
}

  return (
    <>
      <div className="navbar container">

        <a href="#!" className="logo">F<span>oo</span>diesHub</a>

        <div className="nav-links">
          {links.map(link => (
            <a href="#!" key={link.name}> {link.name} </a>
          ))}
          {/* <a href="#!">Home</a>
          <a href="#!">Recipe</a>
          <a href="#!">Settings</a> */}
        </div>

        <div onClick={() => setShowSideBar(!showSideBar)} className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}>

          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>

        </div>
      </div>

      {showSideBar && <Sidebar close={closeSideBar} links={links} />}
    </>
  )
}
