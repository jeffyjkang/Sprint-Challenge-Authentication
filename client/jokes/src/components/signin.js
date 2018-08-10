import React, { Component } from "react";
import axios from "axios";
import { SignInBack, Head1, FormContain1, Box, Click } from "../reusablestyles";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  editInputHandler = e => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmitInput = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state)
      .then(res => {
        const token = res.data;
        localStorage.setItem("jwt", token);
        this.props.history.push("/jokes");
      })
      .catch(err => {
        console.error("axios failed");
      });
  };

  render() {
    return (
      <SignInBack>
        <Head1>SignIn Page</Head1>
        <FormContain1>
          <form onSubmit={this.handleSubmitInput}>
            <Box
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.editInputHandler}
              placeholder="please input username"
            />
            <Box
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.editInputHandler}
              placeholder="please input password"
            />
            <Click type="submit">SignIn</Click>
          </form>
        </FormContain1>
      </SignInBack>
    );
  }
}

export default SignIn;
