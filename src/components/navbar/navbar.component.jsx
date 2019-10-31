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
    {/* LOGO: */}
    <div className="logo-container">
      <div className="logo-text">BROADKATS</div>

      <div className="me-dot-container">
        <div className="circle">me</div>
      </div>
    </div>
    {/* ROOM NAV */}
    <div className="room-nav">
      <div className="item-container">
        <div className="circle">
          <NineDotIcon className="icon-properties" width="15" />
        </div>
      </div>

      <div className="item-container">
        <div className="circle">
          <SearchIcon className="icon-properties" width="15" />
        </div>
      </div>
      <div className="item-container">
        <div className="circle">
          <PlusIcon className="icon-properties" width="15" />
        </div>
      </div>
      <div className="item-container">
        <div className="circle"></div>
      </div>
      <div className="item-container">
        <div className="circle"></div>
      </div>
      <div className="item-container">
        <div className="circle"></div>
      </div>
    </div>
    {/* SITE NAV */}
    <div className="site-nav">
      <div className="page-drop-down">
        <BarsIcon className="icon-properties" width="15" />
      </div>
      <div className="user-settings">
        <PeopleIcon className="icon-properties" width="15" />
      </div>
      <div className="logout-btn">
        <XIcon className="icon-properties" width="15" />
      </div>
    </div>
  </div>
);

export default NavBar;
