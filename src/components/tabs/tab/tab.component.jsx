import React from "react";
import "./tab.styles.scss";

const tabs = props => (
  <button
    className={`tab ${props.tab ? props.tab : null}`}
    onClick={() => props.selectActive(props.content)}
  >
    {props.name}
  </button>
);

export default tabs;
