import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { InitialState } from "../../store/auth";

import { NavLink } from 'react-router-dom';
import './SideBar.scss';
import { BiChevronUp } from 'react-icons/bi';

import logo from '../../images/icon.png'




const SideBar = ({ isOpen, toggle }: { isOpen: boolean, toggle: Function }) => {


  const user = useSelector((state: InitialState) => state.auth.state)
  const [sideBarContainerToggel, setSideBarContainerToggel] = useState({
    opacity: 0,
    top: 100
  });



  useEffect(() => {
    let opacity;
    let top;
    let zindex;

    isOpen ? opacity = 100 : opacity = 0;
    isOpen ? top = 0 : top = -100;
    isOpen ? zindex = 999 : top = -999;

    const tab = {
      opacity: opacity,
      top: top,
      zIndex: zindex
    };

    setSideBarContainerToggel(tab)

  }, [isOpen]);

  return (
    <nav className="sideBarContainer" style={sideBarContainerToggel}>
      <div className="icon">
        <BiChevronUp className="closeIcon" onClick={() => toggle()} />
      </div>
      <div className="sideBarWrapper">

        <div className="sideBarMenu">
          <img src={logo} className="navBarLogo" alt='logo' />
          {!user &&
            <>
              <NavLink className="sideBarLink" onClick={() => toggle()} to="/">Home</NavLink>
              <NavLink className="sideBarLink" onClick={() => toggle()} to="/register">Register</NavLink>
            </>
          }

          {user &&
            <>
              <NavLink className="sideBarLink" onClick={() => toggle()} to="/Catalog">Catalog</NavLink>
              <NavLink className="sideBarLink" onClick={() => toggle()} to="/Desks">Desk</NavLink>
              <NavLink className="sideBarLink" onClick={() => toggle()} to="/Settings">Settings</NavLink>
            </>
          }
        </div>
        <div className="sideBtnWrapper">
          {user ?
            <NavLink className="navBtnLink" onClick={() => toggle()} to="/logout">Logout</NavLink> :
            <NavLink className="navBtnLink" onClick={() => toggle()} to="/login">Sign In</NavLink>
          }
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
