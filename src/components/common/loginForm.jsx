import React, { Component } from "react";
import Input from "../common/input";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };

  validate = () => {
    const errors = {};

    const { username, password } = this.state;
    if (username.trim() === "") errors.username = "Username is required";
    if (password.trim() === "") errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    //call the server
    console.log("Submitted 👍");
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, password, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={username}
            handleChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
