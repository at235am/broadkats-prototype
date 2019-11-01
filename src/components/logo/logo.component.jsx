import React from "react";

import CircleBtn from "../circle-btn/circle-btn.component";

import "./logo.styles.scss";

const Logo = () => (
  <div className="logo-container">
    <div className="logo-text">BROADKATS</div>
    <CircleBtn text="me" />
  </div>
);

export default Logo;
