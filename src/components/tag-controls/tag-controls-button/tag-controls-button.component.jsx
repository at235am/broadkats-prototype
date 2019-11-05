import React from "react";
import "./tag-controls-button.styles.scss";

const tagControlsButton = props => (
  <button className="tag-button">
    <img src={props.svg} onClick={props.handler} alt=""></img>
  </button>
);

export default tagControlsButton;
