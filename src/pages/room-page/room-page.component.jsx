import React, { Component } from "react";
import "./room-page.styles.scss";

import Sidebar from "../../components/sidebar/sidebar.component";
import CollapsibleContent from "../../components/collapsible-content/collapsible-content.component";
import RoomScreen from "../../components/room-screen/room-screen.component";
import RoomBar from "../../components/room-bar/room-bar.component";
import RoomSettings from "../../components/room-settings/room-settings.component";
import Init from "../../components/room-init/room-init.component";
import Chat from "../../components/chat/chat.component.jsx";
// Test imports
import Tabs from "../../components/tabs/tabs.component";

class RoomPage extends Component {
  state = {
    showInit: true,
    showSettings: false,
    settings: [
      {
        title: "Privacy",
        header: "This is your settings for privacy.",
        description: "I'm a description.",
        value: false
      },
      {
        title: "Test A",
        header: "This is your settings for test a.",
        description: "I'm a description.",
        value: false
      },
      {
        title: "Test B",
        header: "This is your settings for test b.",
        description: "I'm a description.",
        value: false
      },
      {
        title: "Test C",
        header: "This is your settings for test c.",
        description: "I'm a description.",
        value: false
      }
    ],
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
      <div className="room-container">
        <Sidebar side="left" visible="false">
          <CollapsibleContent id="collapsible-activity" label="Activity"
            content={"WHATEVER"}
          />
          <CollapsibleContent id="collapsible-friends" label="Friends"
            content={"WHATEVER2"}
          />
        </Sidebar>
        <Sidebar side="right" visible="true">
          <Chat/>
        </Sidebar>
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
              className="room-settings-page"
              settings={this.state.settings}
              toggleSettings={this.toggleSettings}
            />
          )}
        </div>
      </div>
    );
  }
}

export default RoomPage;
