import React, { Component } from "react";
import "./room-page.styles.scss";

import RoomScreen from "../../components/room-screen/room-screen.component";
import RoomBar from "../../components/room-bar/room-bar.component";
import RoomSettings from "../../components/room-settings/room-settings.component";
import Init from "../../components/room-init/room-init.component";

// Test imports

class RoomPage extends Component {
  state = {
    showInit: true,
    showSettings: false,
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

  exit = () => {
    const home = "/";
    this.props.history.push(home);
  };

  render() {
    return (
      <div className="room">
        {this.state.showInit && (
          <Init
            className="room-screen-item"
            closeInit={this.closeInit}
            tags={this.state.tags}
            roomName={this.state.roomName}
          />
        )}
        <RoomBar
          className="room-bar-item"
          roomName={this.state.roomName}
          tags={this.state.tags}
          toggleSettings={this.toggleSettings}
          exit={this.exit}
        />
        <RoomScreen className="room-screen-item" />
        {this.state.showSettings && (
          <RoomSettings
            className="settings-page"
            toggleSettings={this.toggleSettings}
          ></RoomSettings>
        )}
      </div>
    );
  }
}

export default RoomPage;
