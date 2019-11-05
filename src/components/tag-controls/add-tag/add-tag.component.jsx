import React from "react";
import "./add-tag.styles.scss";

import TagControlsButton from "../tag-controls-button/tag-controls-button.component";
import plus from "../../../assets/icons/plus-solid.svg";

// NOTE utilizes className inheritance through passing same className "tag-button"
const addTag = props => (
  <div className="add-tag">
    <TagControlsButton svg={plus}></TagControlsButton>
    <input
      type="text"
      value=""
      placeholder="Tag..."
      // change
      size="10"
      maxLength="10"
    ></input>
  </div>
);

export default addTag;
