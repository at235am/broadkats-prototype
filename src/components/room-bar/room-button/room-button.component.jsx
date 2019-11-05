import React from "react";
import "./room-button.styles.scss";

const roomButton = props => (
  <button className="room-button">
    <img src={props.svg} alt=""></img>
  </button>
);

export default roomButton;
