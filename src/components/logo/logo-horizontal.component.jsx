import React from "react";

import CircleBtn from "../circle-btn/circle-btn.component";
import { ReactComponent as MinBLogoTypeface } from "../../assets/logo-icons/min-b-typeface.svg";
import { ReactComponent as MinBLogoVectorArt } from "../../assets/logo-icons/min-b-vector-art.svg";

import "./logo-horizontal.styles.scss";

const LogoHorizontal = ({ className, ...otherProps }) => (
  <div className={`logo-h-container ${className ? className : ""}`}>
    <MinBLogoVectorArt />
    <MinBLogoTypeface />

    {/* <div className="logo-text">BROADKATS</div> */}
    {/* <CircleBtn text="me" /> */}
  </div>
);

export default LogoHorizontal;
