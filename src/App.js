import React, { Component } from "react";
import firebase from "./firebase.js";
import "./App.css";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/home" component={Home} />
          <Route path="/" component={Login} />
        </div>
      </Router>
    );
  }
}
export default App;
