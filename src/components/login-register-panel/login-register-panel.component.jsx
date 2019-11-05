import React from "react";

import LogIn from "../login/login.component";
import Register from "../register/register.component";

import Logo from "../logo/logo.component";
import CustomButton from "../custom-button/custom-button.component";
import "./login-register-panel.styles.scss";

class LoginRegisterPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabSelected: "login",
      panelRendered: <LogIn className="fields" />
    };
  }

  switchTab = event => {
    let componentToUse = "";
    let selectedTab = "";

    if (event.target.className.includes("login-tab-btn")) {
      selectedTab = "login";
      componentToUse = <LogIn className="fields" />;
    } else {
      selectedTab = "register";
      componentToUse = <Register className="fields"></Register>;
    }

    this.setState({
      tabSelected: selectedTab,
      panelRendered: componentToUse
    });
  };

  render() {
    return (
      <div className="login-register-panel">
        <div className="tab-options">
          <CustomButton
            className={`login-tab-btn ${
              this.state.tabSelected === "login" ? "tabselected" : ""
            }`}
            onClick={this.switchTab}
          >
            Login
          </CustomButton>
          <CustomButton
            className={`register-tab-btn ${
              this.state.tabSelected === "register" ? "tabselected" : ""
            }`}
            onClick={this.switchTab}
          >
            Register
          </CustomButton>

          {/* <div className="login-tab-btn" onClick={this.switchTo}></div> */}
          {/* <div className="register-tab-btn" onclic></div> */}
        </div>
        <Logo className="logo-area" />
        {this.state.panelRendered}
      </div>
    );
  }
}

export default LoginRegisterPanel;
