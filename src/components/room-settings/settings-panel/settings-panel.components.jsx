import React from "react";
import "./settings-panel.styles.scss";

const settingsPanel = props => {
  let settingsLabels = props.settingsNames.map(settingsName => (
    <button className="settings-label">{settingsName}</button>
  ));

  return <div className="settings-panel">{settingsLabels}</div>;
};

export default settingsPanel;
