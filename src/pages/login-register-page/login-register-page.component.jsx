import React from "react";

import Login from "../../components/login/login.component";
import LoginRegisterPanel from "../../components/login-register-panel/login-register-panel.component";
import "./login-register-page.styles.scss";

const LoginRegisterPage = () => (
  <div className="login-register-page">
    {/* <Login className="login-register-panel" /> */}
    <LoginRegisterPanel />
  </div>
);

export default LoginRegisterPage;
