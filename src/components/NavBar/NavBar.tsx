import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

interface INavBarProps {
}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  return (
    <nav>
        <NavLink to="/">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
    </nav>
  );
};

export default NavBar;
