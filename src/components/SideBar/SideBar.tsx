import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.scss';
import { FaStarOfLife } from 'react-icons/fa';

interface INavBarProps {
  isOpen: boolean;
  toggle(): void;
}

const SideBar: React.FunctionComponent<INavBarProps> = (props) => {

  const [sideBarContainerToggel, setSideBarContainerToggel] = useState({
    opacity: 100,
    top: 0
  });

  const isOpen = props.isOpen;
  const toggle = props.toggle;



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

    console.log(isOpen);
    console.log(opacity);
    console.log(top);

  }, [isOpen]);

  return (
    <div className="sideBarContainer" style={sideBarContainerToggel}>
      <div className="icon">
        <FaStarOfLife className="closeIcon" onClick={toggle} />
      </div>
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <NavLink className="sideBarLink" onClick={toggle} to="/">Home</NavLink>
          <NavLink className="sideBarLink" onClick={toggle} to="/register">Register</NavLink>
        </div>
        <div className="sideBtnWrapper">
          <NavLink className="sideBtnLink" onClick={toggle} to="/login">Sign In</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;