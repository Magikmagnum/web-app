import React from 'react';

import { useSelector } from 'react-redux';
import { InitialState } from "../../store/auth";

import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import logo from '../../images/icon.png'
import './NavBar.scss';


const NavBar = ({ toggle }: { toggle: Function }) => {

  const user = useSelector((state: InitialState) => state.auth.state)

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
          {
            !user &&
            <>
              <li className="navItem">
                <NavLink className="navLink" to="/">Home</NavLink>
              </li>
              <li className="navItem">
                <NavLink className="navLink" to="/register">Register</NavLink>
              </li>
            </>
          }
          {
            user &&
            <>
              <li className="navItem">
                <NavLink className="navLink" to="/dashboard">DashBoard</NavLink>
              </li>
              <li className="navItem">
                <NavLink className="navLink" to="/galleries">Gallerie</NavLink>
              </li>
            </>
          }
        </ul>
        <nav className="navBtn">
          {
            user ?
              <NavLink className="navBtnLink" to="/logout">Logout</NavLink> :
              <NavLink className="navBtnLink" to="/Login">Sign In</NavLink>
          }
        </nav>
      </div >
    </nav >
  );
};

export default NavBar;
