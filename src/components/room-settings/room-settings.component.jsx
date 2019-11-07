import React, { Component } from "react";
import "./room-settings.styles.scss";

import Modal from "../ui/modal/modal.component";
import Tabs from "../tabs/tabs.component";

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
            <Tabs
              tab="room-settings-tab"
              tabSidePanel="room-settings-panel"
              tabContents="room-settings-content"
            >
              <div className="demo-1" name="PRIVACY"></div>
              <div className="demo-2" name="OPERATOR ACCESS"></div>
              <div className="demo-3" name="VOLUME CONTROL"></div>
              <div className="demo-4" name="VOICE CHAT"></div>
              <div className="demo-5" name="VIDEO/AUDIO"></div>
              <div className="demo-6" name="USER REPORTS"></div>
              <div name="DELETE ROOM"></div>
            </Tabs>
          </div>
        </Modal>
      </div>
    );
  }
}

export default RoomSettings;
