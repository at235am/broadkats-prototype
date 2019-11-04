import React from "react";

import "./sidebar.styles.scss";
import CollapsibleContent from "../collapsible-content/collapsible-content.component";

class Sidebar extends React.Component {

  render() {
    return (
      <div className={`sidebar-container ${this.props.className ? this.props.className : ""}`}>

      	<div className="vertical-button"/>

      	<div className="sidebar-content">
      		<CollapsibleContent id="collapsible-activity" label="Activity"
      			content={"WHATEVER"}
      		/>
      		<CollapsibleContent id="collapsible-friends" label="Friends"
      			content={"WHATEVER2"}
      		/>
      	</div>

      </div>
    );
  }
}

export default Sidebar;