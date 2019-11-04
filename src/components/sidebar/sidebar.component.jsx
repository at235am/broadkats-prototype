import React from "react";

import "./sidebar.styles.scss";
import CollapsibleContent from "../collapsible-content/collapsible-content.component";
import { ReactComponent as BarsIcon } from "../../assets/icons/bars-solid.svg";

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  expand(){
    let content = document.getElementById("sidebar-content");
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

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