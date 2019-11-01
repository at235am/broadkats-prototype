import React from "react";
import { Link } from "react-router-dom";

import CircleBtn from "../circle-btn/circle-btn.component";
import Logo from "../logo/logo.component";

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
    <div className="logo-section">
      <Link to="/login">
        <Logo />
      </Link>
    </div>

    {/* ROOM NAV */}
    <div className="room-nav">
      <Link to="/lobby">
        <CircleBtn
          className="room-nav-btn home-btn circle-hover"
          icon={<NineDotIcon />}
        />
      </Link>

      <CircleBtn
        className="room-nav-btn search-btn circle-hover"
        icon={<SearchIcon />}
      />
      <CircleBtn
        className="room-nav-btn create-room-btn circle-hover"
        icon={<PlusIcon />}
      />
      <Link to="/room">
        <CircleBtn className="room-nav-btn room-btn circle-hover" text="a" />
      </Link>
      <Link to="/room">
        <CircleBtn className="room-nav-btn room-btn circle-hover" text="b" />
      </Link>
      <Link to="/room">
        <CircleBtn className="room-nav-btn room-btn circle-hover" text="c" />
      </Link>
    </div>

    {/* SITE NAV */}
    <div className="site-nav">
      <CircleBtn className="more-pages-btn" icon={<BarsIcon />} />
      <CircleBtn className="user-settings-btn" icon={<PeopleIcon />} />
      <CircleBtn className="logout-btn" icon={<XIcon />} />
    </div>
  </div>
);

export default NavBar;
