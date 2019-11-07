import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./new-room.styles.scss";

const NewRoom = () => (
  <div className="newroom-container">
    <div className="header gap">Create Room</div>

    {/* <div className="room-title">sdfsdfdsf</div> */}

    <FormInput
      className="room-title gap"
      name="room-title"
      type="email"
      label="room title"
      value=""
      required
    />
    <div className="tags-container gap">sdfsdfdsf</div>
    <div className="settings-privacy gap">sdfsdfdsf</div>
    <div className="settings-room-type gap">sdfsdfdsf</div>
    <CustomButton className="new-room-btn">Create Room</CustomButton>
  </div>
);

export default NewRoom;
