import React from "react";
import { Link } from "react-router-dom";

import CircleBtn from "../circle-btn/circle-btn.component";

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

        <CircleBtn text="me" />
      </div>
    </Link>

    {/* ROOM NAV */}
    <div className="room-nav">
      <Link to="/lobby">
        <CircleBtn icon={<NineDotIcon />} />
      </Link>

      <CircleBtn icon={<SearchIcon />} />
      <CircleBtn icon={<PlusIcon />} />
      <Link to="/room">
        <CircleBtn />
      </Link>
      <Link to="/room">
        <CircleBtn />
      </Link>
      <Link to="/room">
        <CircleBtn />
      </Link>
    </div>

    {/* SITE NAV */}
    <div className="site-nav">
      {/* <div className="page-drop-down">
        <BarsIcon className="icon-properties" width="15" />
      </div>
      <div className="user-settings">
        <PeopleIcon className="icon-properties" width="15" />
      </div>
      <div className="logout-btn">
        <XIcon className="icon-properties" width="15" />
      </div> */}

      <CircleBtn icon={<BarsIcon />} />
      <CircleBtn icon={<PeopleIcon />} />
      <CircleBtn icon={<XIcon />} />
    </div>
  </div>
);

export default NavBar;
