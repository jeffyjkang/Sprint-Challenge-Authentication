import React, { Component } from "react";
import axios from "axios";
import { SignUpBack, Head, FormContain, Box, Click } from "../reusablestyles";

class SignUp extends Component {
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
      .post("http://localhost:5000/api/register", this.state)
      .then(response => {
        localStorage.setItem("jwt", response.data);
        this.props.history.push("/jokes");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <SignUpBack>
        <Head>SignUp page</Head>
        <FormContain>
          <form onSubmit={this.handleSubmitInput}>
            <Box
              type="text"
              name="username"
              onChange={this.editInputHandler}
              value={this.state.username}
              placeholder="add username"
            />
            <Box
              type="password"
              name="password"
              onChange={this.editInputHandler}
              value={this.state.password}
              placeholder="add password"
            />
            <br />
            <Click onClick={this.handleSubmitInput}>Add User</Click>
          </form>
        </FormContain>
      </SignUpBack>
    );
  }
}

export default SignUp;
