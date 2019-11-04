import React from "react";

import LogIn from "../login/login.component";

import "./login-register-panel.styles.scss";

const LoginRegisterPanel = ({ children, ...otherProps }) => (
  <div className="login-register-panel">
    <LogIn className="fields" />
  </div>
);

export default LoginRegisterPanel;
