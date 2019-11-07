import React from "react";

import CircleBtn from "../circle-btn/circle-btn.component";
import LogoHorizontal from "../logo/logo-horizontal.component";

import "./poppity.styles.scss";

// const Poppity = ({ children, arrowGap = 0, alignArrow }) => (

// );

class Poppity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: false
    };
  }

  togglePoppity = event => {
    const { value, name } = event.target;
    this.setState({ enabled: !this.state.enabled });
  };

  render() {
    let newChildWithOnClick = React.cloneElement(this.props.children, {
      onClick: this.togglePoppity
    });

    return (
      <div className="poppity-container">
        {newChildWithOnClick}

        <div className="pop-up-container">
          <div
            className={`triangle ${this.state.enabled ? "" : "disabled"}`}
            style={{ top: parseInt(this.props.arrowGap) }}
          >
            <div
              className={`dropdown-container ${(() => {
                if (this.props.alignArrow == "right") {
                  return "align-right";
                } else if (this.props.alignArrow == "left") {
                  return "align-left";
                } else {
                  return "align-center";
                }
              })()}`}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Poppity;
