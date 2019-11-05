import React from "react";
import "./settings-panel.styles.scss";

const settingsPanel = props => {
  let settingsLabels = props.settings.map(settings => (
    <button className="settings-label">{settings}</button>
  ));

  return <div>{settingsLabels}</div>;
};

export default settingsPanel;
