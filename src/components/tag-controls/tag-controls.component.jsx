import React from "react";
import "./tag-controls.styles.scss";

import AddTag from "./add-tag/add-tag.component";
import RemoveTag from "./remove-tag/remove-tag.component";

const tagControls = props => {
  let tagControls = props.tags.map(tag => {
    return <RemoveTag className="tag-control" key={tag} tag={tag} />;
  });

  // change
  if (tagControls.length === 0) {
    tagControls = null;
    console.log("NO TAGS");
  }

  return (
    <div className="tag-controls">
      {tagControls}
      <AddTag className="tag-control" />
    </div>
  );
};

export default tagControls;
