import React from "react";

// import BarsIcon from "../../assets/icons/bars-solid";
import BarsIcon from "../icons/three-bars.icon";
import XIcon from "../icons/x.icon";
import PeopleIcon from "../icons/people.icon";
import ThreeCircleIcon from "../icons/three-circles.icon";
import PlusIcon from "../icons/plus.icon";

import "./navbar.styles.scss";

const NavBar = () => (
  <div className="navbar-container">
    <div className="logo-container">
      <div className="logo-text">BROADKATS</div>

      <div className="me-dot-container">
        <div className="me-dot-item">me</div>
      </div>
    </div>
    <div className="room-nav">
      <div className="item-container">
        <div className="item">
          <ThreeCircleIcon fill="#353744" width="15" height="15" />
        </div>
      </div>
      <div className="item-container">
        <div className="item">
          <PlusIcon fill="#353744" width="15" height="15" />
        </div>
      </div>
      <div className="item-container">
        <div className="item"></div>
      </div>
      <div className="item-container">
        <div className="item"></div>
      </div>
      <div className="item-container">
        <div className="item"></div>
      </div>
      <div className="item-container">
        <div className="item"></div>
      </div>
    </div>
    <div className="site-nav">
      <div className="page-drop-down">
        <BarsIcon fill="#353744" width="15" height="15" />
      </div>
      <div className="user-settings">
        <PeopleIcon fill="#353744" width="15" height="15" />
      </div>
      <div className="logout-btn">
        <XIcon fill="#353744" width="15" height="15" />
      </div>
    </div>
  </div>
);

export default NavBar;
