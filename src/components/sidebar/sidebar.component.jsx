import React from "react";

import "./sidebar.styles.scss";
import CollapsibleContent from "../collapsible-content/collapsible-content.component";

class Sidebar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      visible: false,
    };
  }

  expand(){
    let container = document.getElementById("sidebarcontainer");
    if (this.state.visible == false) {
      container.style.marginLeft= "0%";
      this.setState({visible: true})
    }else{
      container.style.marginLeft = container.style.width;
      this.setState({visible: false})
    }
  }

  render() {
    return (
      <div id="sidebarcontainer" className={`sidebar-container ${this.props.className ? this.props.className : ""}`}>

      	<div className="vertical-button" onClick={this.expand.bind(this)}/>

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