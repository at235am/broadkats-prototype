import React from "react";

import Logo from "../logo/logo.component";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./login.styles.scss";

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    console.log("a:", event.target.name);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div
        className={`login-container ${
          this.props.className ? this.props.className : ""
        }`}
      >
        {/* <h2>I already have an account</h2> */}
        {/* <span>Sign in with your email and password</span> */}
        {/* <div className="logo-container">
          <div className="logo">
            <Logo />
          </div>
          <h1 className="logo-text">
            broadkats<span className="suffix">.me</span>
          </h1>
        </div> */}
        <form className="form-container" onSubmit={this.handleSubmit}>
          <Logo className="logo-container"></Logo>
          <FormInput
            className="email-field"
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            className="password-field"
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />
          <CustomButton className="login-btn" type="submit">
            login
          </CustomButton>
          <CustomButton className="google-login-btn" type="submit">
            login w/ google
          </CustomButton>
        </form>
        {/* <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="EMAIL"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="PASSWORD"
            required
          />
          <CustomButton className="button" type="submit">
            Login
          </CustomButton>
          <CustomButton className="button" type="submit">
            Register
          </CustomButton>
        </form> */}
      </div>
    );
  }
}

export default LogIn;
