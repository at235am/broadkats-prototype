import React from "react";
import "./room-settings.styles.scss";

import SettingsPanel from "./settings-panel/settings-panel.components";
import SettingsContent from "./settings-content/settings-content.component";

const roomSettings = props => (
  <div>
    <SettingsPanel></SettingsPanel>
    <SettingsContent></SettingsContent>
  </div>
);

export default roomSettings;
