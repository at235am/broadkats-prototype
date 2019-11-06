import React from "react";
import "./room-bar.styles.scss";

import exit from "../../assets/icons/exit.svg";
import heart from "../../assets/icons/heart.svg";
import cog from "../../assets/icons/cog.svg";
import refresh from "../../assets/icons/refresh.svg";

import Tag from "../tag/tag.components";
import RoomTitle from "./room-title/room-title.component";
import RoomButton from "./room-button/room-button.component";

const roomBar = props => {
  let tagsBar = props.tags.map(tag => {
    return (
      <div className="tags-display">
        <Tag tag={tag}></Tag>
      </div>
    );
  });

  // change to display message to user
  if (tagsBar.length === 0) {
    tagsBar = null;
    console.log("NO TAGS");
  }

  return (
    <div className={`room-bar ${props.className ? props.className : null}`}>
      <div className="room-title">
        <RoomTitle roomTitle={props.roomName}></RoomTitle>
        {tagsBar}
      </div>

      <div className="favorite-button">
        <RoomButton svg={heart}></RoomButton>
      </div>

      <div className="settings-button">
        <RoomButton svg={cog} click={props.toggleSettings}></RoomButton>
      </div>

      <div className="refresh-button">
        <RoomButton svg={refresh}></RoomButton>
      </div>

      <div className="exit-button">
        <RoomButton svg={exit} click={props.exit}></RoomButton>
      </div>
    </div>
  );
};

export default roomBar;
