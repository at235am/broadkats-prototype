import React, { Component } from "react";
import "./room-settings.styles.scss";

import Modal from "../ui/modal/modal.component";
import SettingsPanel from "./settings-panel/settings-panel.components";
import SettingsContent from "./settings-content/settings-content.component";

class RoomSettings extends Component {
  state = {
    settingsNames: this.props.settings.map(({ title }) => title),
    selectedSetting: this.props.settings[0].title
  };

  selectSetting = selected => {
    this.setState({ selectSetting: selected });
  };

  render() {
    return (
      <div className={this.props.className}>
        <Modal
          backdropClass="room-settings-backdrop"
          modalClass="room-settings-modal"
          // className="settings-room-modal"
          show={this.props.toggleSettings}
        >
          <div className="room-settings">
            <SettingsPanel
              className="room-settings-panel"
              settingsNames={this.state.settingsNames}
              onClick={() => this.selectSetting}
            ></SettingsPanel>
            <SettingsContent className="room-settings-content"></SettingsContent>
          </div>
        </Modal>
      </div>
    );
  }
}

export default RoomSettings;
