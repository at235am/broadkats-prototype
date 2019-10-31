import React from "react";
import { Link } from "react-router-dom";

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
    <Link to="/login">
      <div className="logo-container">
        <div className="logo-text">BROADKATS</div>

        <div className="me-dot-container">
          <div className="circle">
            <div className="icon-properties">me</div>
          </div>
        </div>
      </div>
    </Link>

    {/* ROOM NAV */}
    <div className="room-nav">
      <div className="item-container">
        <Link to="/lobby">
          <div className="circle">
            <NineDotIcon className="icon-properties" width="15" />
          </div>
        </Link>
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
      <Link to="/room">
        <div className="item-container">
          <div className="circle"></div>
        </div>
      </Link>
      <Link to="/room">
        <div className="item-container">
          <div className="circle"></div>
        </div>
      </Link>
      <Link to="/room">
        <div className="item-container">
          <div className="circle"></div>
        </div>
      </Link>
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
