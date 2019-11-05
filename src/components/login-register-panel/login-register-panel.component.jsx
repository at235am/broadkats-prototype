import React from "react";

import LogIn from "../login/login.component";
import Logo from "../logo/logo.component";

import "./login-register-panel.styles.scss";

const LoginRegisterPanel = ({ children, ...otherProps }) => (
  <div className="login-register-panel">
    <div className="tab-options"></div>
    <Logo className="logo-area" />
    <LogIn className="fields" />
  </div>
);

export default LoginRegisterPanel;
