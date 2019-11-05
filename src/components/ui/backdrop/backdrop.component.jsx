import React from "react";
import "./backdrop.styles.scss";

const backdrop = props => (
  <div className="backdrop" onClick={props.clicked}></div>
);

export default backdrop;
