import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import { FaBars } from 'react-icons/fa';

import logo from '../../images/logoEkna.webp'

interface INavBarProps {
  toggle(): void;
}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {

  const toggle = props.toggle;

  return (
    <nav className="nav">
      <div className="navBarContainer">
        <span className="navBarLogoContainer">
          <img src={logo} className="navBarLogo" alt='logo' />
        </span>
        <div className="mobileIcon" onClick={toggle}>
          <FaBars className="farBars" style={{ color: 'white' }} />
        </div>

        <ul className="navMenu">
          <li className="navItem">
            <NavLink className="navLink" to="/">Home</NavLink>
          </li>
          <li className="navItem">
            <NavLink className="navLink" to="/register">Register</NavLink>
          </li>
        </ul>
        <nav className="navBtn">
          <NavLink className="navBtnLink" to="/Login">Sign In</NavLink>
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;
