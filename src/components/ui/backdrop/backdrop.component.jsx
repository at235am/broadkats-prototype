import React from "react";
import "./backdrop.styles.scss";

const backdrop = props => (
  <div
    className={`backdrop ${props.backdropClass ? props.backdropClass : null}`}
    onClick={props.clicked}
  ></div>
);

export default backdrop;
