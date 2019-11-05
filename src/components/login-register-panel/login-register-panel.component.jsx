import React from "react";

import LogIn from "../login/login.component";
import Logo from "../logo/logo.component";
import CustomButton from "../custom-button/custom-button.component";
import "./login-register-panel.styles.scss";

class LoginRegisterPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabSelected: ""
    };
  }

  switchTo = event => {
    let componentToUse = "";
    if (event.target.className.includes("login-tab-btn")) {
      console.log("login");
      componentToUse = <LogIn className="fields" />;
    } else {
      console.log("register");
      componentToUse = <div className="hello fields">sdfsdf</div>;
    }

    this.setState({
      tabSelected: componentToUse
    });
  };

  render() {
    return (
      <div className="login-register-panel">
        <div className="tab-options">
          <CustomButton className="login-tab-btn" onClick={this.switchTo}>
            Login
          </CustomButton>
          <CustomButton className="register-tab-btn" onClick={this.switchTo}>
            Register
          </CustomButton>

          {/* <div className="login-tab-btn" onClick={this.switchTo}></div> */}
          {/* <div className="register-tab-btn" onclic></div> */}
        </div>
        <Logo className="logo-area" />
        {this.state.tabSelected}
      </div>
    );
  }
}

export default LoginRegisterPanel;
