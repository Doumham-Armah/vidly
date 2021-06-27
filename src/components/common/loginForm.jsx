import React, { Component } from "react";
import Input from "../common/input";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };

  validate = () => {};

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
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
    const { username, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form>
          <Input
            name="username"
            label="Username"
            value={username}
            handleChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
