import React, { Component } from "react";
import "./tabs.styles.scss";

import Tab from "./tab/tab.component";

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.initial ? this.props.initial : null
    };
  }

  selectActive = tab => {
    this.setState({ active: tab });
  };

  renderActive() {
    const { children } = this.props;
    const { active } = this.state;

    // Assume you pass in a number of components.
    // Searches for equivalent child.
    let child = React.Children.map(children, (child, i) => {
      if (child === active) {
        return child;
      }
    });

    return child;
  }

  render() {
    let tabs = React.Children.map(this.props.children, (child, i) => (
      <Tab
        key={i}
        name={child.props.name}
        content={child}
        selectActive={this.selectActive}
      ></Tab>
    ));

    return (
      <div className="tabs">
        <div
          className={`tab-side-panel ${
            this.props.className ? this.props.className : null
          }`}
        >
          {tabs}
        </div>
        <div
          className={`tab-contents ${
            this.props.className ? this.props.className : null
          }`}
        >
          {this.renderActive()}
        </div>
      </div>
    );
  }
}

export default Tabs;
