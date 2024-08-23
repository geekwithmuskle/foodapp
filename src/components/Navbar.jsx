import React, {useState} from 'react'

import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {

const location = useLocation();

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

        <Link to="/" className="logo">F<span>oo</span>diesHub</Link>

        <div className="nav-links">
          {links.map(link => (
            <Link to={link.path} key={link.name} className={location.pathname === link.path ? "active" : ""}> {link.name} </Link>
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
