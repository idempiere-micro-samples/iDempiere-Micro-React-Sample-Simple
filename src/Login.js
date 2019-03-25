import React, { Component } from "react";
import { login } from "./client";

export class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {userName: "", password: ""};
  
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleNameChange(event) {
      this.setState({userName: event.target.value});
    }
  
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        var userName = this.state.userName;
        var password = this.state.password;

        login(userName, password, this.props.handleLogin);

        event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            User name:
            <input type="text" value={this.state.userName} onChange={this.handleNameChange} />
          </label>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }