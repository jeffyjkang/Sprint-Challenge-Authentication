import React, { Component } from "react";
import axios from "axios";
import { JokesBack, Click, JokesCont, JokeBox } from "../reusablestyles";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };
    axios
      .get("http://localhost:5000/api/jokes", requestOptions)
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(error => {
        console.error("Axios Failed");
      });
  }

  logoutHandler = e => {
    localStorage.removeItem("jwt");
    this.props.history.push("/signin");
  };

  render() {
    return (
      <JokesBack>
        <div>
          {localStorage.getItem("jwt") && (
            <Click onClick={this.logoutHandler}>logout</Click>
          )}
        </div>
        <JokesCont>
          {this.state.jokes.map(jokes => (
            <JokeBox key={jokes.id}>
              type: {jokes.type} <br />
              setup: {jokes.setup} <br />
              punchline: {jokes.punchline}
            </JokeBox>
          ))}
        </JokesCont>
      </JokesBack>
    );
  }
}

export default Jokes;
