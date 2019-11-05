import React from "react";
import "./remove-tag.styles.scss";

import TagControlsButton from "../tag-controls-button/tag-controls-button.component";
import Tag from "../../tag/tag.components";

import minus from "../../../assets/icons/minus.svg";

// NOTE utilizes className inheritance through passing same className "tag-button"
const removeTag = props => (
  <div className="remove-tag">
    <Tag className="tag" tag={props.tag} />
    <TagControlsButton className="tag-button" svg={minus} />
  </div>
);

export default removeTag;
