import React from "react";

import { ReactComponent as MinBLogoTypeface } from "../../assets/logo-icons/min-b-typeface.svg";
import { ReactComponent as MinBLogoVectorArt } from "../../assets/logo-icons/min-b-vector-art.svg";

import "./logo.styles.scss";

const Logo = ({ className, ...otherProps }) => (
  <div className={`logo-container ${className ? className : ""}`}>
    <MinBLogoVectorArt />
    <MinBLogoTypeface />

    {/* <div className="logo-text">BROADKATS</div> */}
    {/* <CircleBtn text="me" /> */}
  </div>
);

export default Logo;
