import React, { Component } from "react";
import "./room-page.styles.scss";

import RoomScreen from "../../components/room-screen/room-screen.component";
import RoomBar from "../../components/room-bar/room-bar.component";
import Modal from "../../components/ui/modal/modal.component";
import Init from "../../components/room-init/room-init.component";

class RoomPage extends Component {
  state = {
    showInit: true,
    showSettings: true,
    settings: ["Public Room"],
    tags: ["Horror", "Suspense", "Angst", "Thriller", "Romance", "NSFW"],
    roomName: "YUMMY"
  };

  closeInit = () => {
    this.setState({ showInit: false });
  };

  toggleSettings = () => {
    const currentSettingsState = this.state.showSettings;
    this.setState({ showSettings: !currentSettingsState });
  };

  render() {
    let initmodal = this.state.showInit ? (
      <div className="modal-item">
        <Modal show={this.closeInit}>
          <Init tags={this.state.tags} roomName={this.state.roomName} />
        </Modal>
      </div>
    ) : null;

    return (
      <div className="room">
        {initmodal}
        <RoomBar
          className="room-bar"
          roomName={this.state.roomName}
          tags={this.state.tags}
          toggleSettings={this.toggleSettings}
        />
        <RoomScreen className="room-screen" />
      </div>
    );
  }
}

export default RoomPage;
