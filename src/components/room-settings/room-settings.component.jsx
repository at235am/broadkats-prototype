import React from "react";
import "./room-settings.styles.scss";

import Modal from "../ui/modal/modal.component";
import SettingsPanel from "./settings-panel/settings-panel.components";
import SettingsContent from "./settings-content/settings-content.component";

const roomSettings = props => (
  <div className={props.className}>
    <Modal
      backdropClass="room-settings-backdrop"
      modalClass="room-settings-modal"
      // className="settings-room-modal"
      show={props.toggleSettings}
    >
      {/* <SettingsPanel></SettingsPanel> */}
      {/* <SettingsContent></SettingsContent> */}
    </Modal>
  </div>
);

export default roomSettings;
