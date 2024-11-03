import React from 'react'
import { useHistory } from 'react-router-dom'
import { MenuOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { Button } from "antd";

const Menubar = () => {

    const history = useHistory();
    const Booking = () => {
    history.push("/booking");
  }

  const [showMediaIcons, setShowMediaIcons] = useState(false);  

  return (
  <>
    <nav className="main-nav">

        {/* 1st logo part  */}
        <div className='menu-logo-holder'>
            <div className='menu-logo'>
                <img src='/Images/carlogo.png' className='menu-logos'/>
                <h3>Inspect This Car</h3>
            </div>
        </div>

        {/* 2nd menu part  */}
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
            <ul className='head-bar'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/price">Pricing</NavLink></li>
            </ul>
        </div>
                <Button type='button' className="btnstart" onClick={Booking}>Get Started</Button>

        {/* 3rd social media links */}
        <div className="social-media">

          {/* hamburger menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <MenuOutlined className='menuicon'/>
            </a>
          </div>
        </div>
    </nav>
  </>
  )
}

export default Menubar