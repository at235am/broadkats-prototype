import React, { Component } from "react";
import "./room-page.styles.scss";

import Sidebar from "../../components/sidebar/sidebar.component";
import CollapsibleContent from "../../components/collapsible-content/collapsible-content.component";
import RoomScreen from "../../components/room-screen/room-screen.component";
import RoomBar from "../../components/room-bar/room-bar.component";
import Modal from "../../components/ui/modal/modal.component";
import Init from "../../components/room-init/room-init.component";

// Test imports

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

  exit = () => {
    const home = "/";
    this.props.history.push(home);
  };

  render() {
    let initmodal = this.state.showInit ? (
      <div className="modal-item">
        <Modal show={this.closeInit}>
          <Init tags={this.state.tags} roomName={this.state.roomName} />
        </Modal>
      </div>
    ) : null;

    let settingsmodal = this.state.showSettings ? (
      <div className="modal-item">
        <Modal show={this.toggleSettings}></Modal>
      </div>
    ) : null;

    return (
      <div className="room">
          <Sidebar side="left" visible="false">
            <CollapsibleContent id="collapsible-activity" label="Activity"
                  content={"WHATEVER"}
                />
                <CollapsibleContent id="collapsible-friends" label="Friends"
                  content={"WHATEVER2"}
                />
          </Sidebar>
          <Sidebar side="right" visible="true">
            <CollapsibleContent id="collapsible-CHAT" label="Chat"
              content={"PEOPLE TALKING WILL GO HERE I GWUESS"}
            />
          </Sidebar>

        {initmodal}
        <RoomBar
          className="room-bar"
          roomName={this.state.roomName}
          tags={this.state.tags}
          toggleSettings={this.toggleSettings}
          exit={this.exit}
        />
        <RoomScreen className="room-screen" />

      </div>
    );
  }
}

export default RoomPage;
