import React from "react";

import { ReactComponent as NineDotIcon } from "../../assets/icons/nine-dots-solid.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-solid.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus-solid.svg";
import { ReactComponent as BarsIcon } from "../../assets/icons/bars-solid.svg";
import { ReactComponent as PeopleIcon } from "../../assets/icons/user-circle-solid.svg";
import { ReactComponent as XIcon } from "../../assets/icons/times-solid.svg";

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
          <NineDotIcon width="15" height="15" />
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
