import React from "react";

import "./sidebar.styles.scss";

class Sidebar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      visible: false,
    };
  }

  expand(){
    let container = document.getElementById("sidebar-container");

    this.setState({visible: !this.state.visible});
    
    if (!this.state.visible) {
      container.style.maxWidth= "100%";
    } else {
      container.style.maxWidth= "1pc";
    }

  }

  render() {
    return (
      <div id="sidebar-container" className={`sidebar-container ${this.props.className}`}>
        <span className="vertical-button" onClick={this.expand.bind(this)}/>
        <div id="sidebar-content" className="sidebar-content">
          {this.state.visible && this.props.children}
        </div>
      </div>
    );
  }
}

export default Sidebar;