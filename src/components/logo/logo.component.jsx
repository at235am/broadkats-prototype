import React from "react";

import CircleBtn from "../circle-btn/circle-btn.component";

import "./logo.styles.scss";

const Logo = ({ className, ...otherProps }) => (
  <div className={`logo-container ${className ? className : ""}`}>
    <div className="logo-text">BROADKATS</div>
    <CircleBtn text="me" />
  </div>
);

export default Logo;
