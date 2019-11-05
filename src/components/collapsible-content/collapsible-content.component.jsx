import React from "react";

import "./collapsible-content.styles.scss";
import { ReactComponent as BarsIcon } from "../../assets/icons/bars-solid.svg";

class CollapsibleContent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  expand(){
    let content = document.getElementById( this.props.id );
    if (this.state.collapsed == false){
      content.style.maxHeight = null;
      this.setState({collapsed: true})
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.setState({collapsed: false})
    }
  }

  render() {
    return (
  		<div className="content-container">
  			<div className="content-header">
  				{this.props.label}
  				<BarsIcon className="content-expand-button" onClick={this.expand.bind(this)}/>
			</div>
      		<div id={this.props.id} className="content">
      			{this.props.content}
      		</div>
  		</div>
    );
  }
}

export default CollapsibleContent;