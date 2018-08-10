import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import Jokes from "./components/jokes";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Jokes Authentication</h1>
        </header>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default App;
