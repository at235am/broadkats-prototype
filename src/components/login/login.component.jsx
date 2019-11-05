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
        <form className="form-container" onSubmit={this.handleSubmit}>
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
            google login
          </CustomButton>

          <a className="forgot-pw" href="/login">
            forgot password?
          </a>
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
