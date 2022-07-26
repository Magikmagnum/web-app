import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import { FaBars } from 'react-icons/fa';

import logo from '../../images/icon.png'


const NavBar = ({ toggle }: { toggle: Function }) => {




  return (
    <nav className="nav">

      <div className="navBarContainer">
        <span className="navBarLogoContainer">
          <img src={logo} className="navBarLogo" alt='logo' />
        </span>
        <div className="mobileIcon" onClick={() => toggle()}>
          <FaBars className="farBars" style={{ color: 'black' }} />
        </div>

        <ul className="navMenu">
          <>
            <li className="navItem">
              <NavLink className="navLink" to="/">Home</NavLink>
            </li>
            <li className="navItem">
              <NavLink className="navLink" to="/register">Register</NavLink>
            </li>
          </>

          <li className="navItem">
            <NavLink className="navLink" to="/dashboard">DashBoard</NavLink>
          </li>
          <li className="navItem">
            <NavLink className="navLink" to="/galleries">Gallerie</NavLink>
          </li>
        </ul>
        <nav className="navBtn"> <NavLink className="navBtnLink" to="/Login">Sign In</NavLink></nav>
      </div >
    </nav >
  );
};

export default NavBar;
