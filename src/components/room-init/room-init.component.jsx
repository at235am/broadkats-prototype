import React from "react";
import "./room-init.styles.scss";

import TagControls from "../tag-controls/tag-controls.component";

const roominit = props => (
  <div className="init">
    <div className="init-room-title">
      <input
        className="init-room-title-input"
        type="text"
        defaultValue={props.roomName}
      />
    </div>

    <div className="edit-tags">
      <TagControls tags={props.tags} />
    </div>

    <div className="start">
      <button className="start-button"> START </button>
    </div>
  </div>
);

export default roominit;
