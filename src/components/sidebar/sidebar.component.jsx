import React from "react";

import "./sidebar.styles.scss";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    if (this.props.visible === "true") {
      this.setState({ visible: true });
    }
  }

  expand() {
    let container = document.getElementById(`sidebar-${this.props.side}`);
    this.setState({ visible: !this.state.visible });

    if (!this.state.visible) {
      container.style.maxWidth = "100%";
    } else {
      container.style.maxWidth = "1pc";
    }
  }

  render() {
    return (
      <div
        id={`sidebar-${this.props.side}`}
        className={`sidebar ${this.props.side} visible-${this.props.visible}`}
      >
        <span className="vertical-button" onClick={this.expand.bind(this)} />
        <div className="sidebar-content">
          {this.state.visible && this.props.children}
        </div>
      </div>
    );
  }
}

export default Sidebar;