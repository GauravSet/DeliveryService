import React, { Component } from "react";
import firebase from "./firebase.js";
import "./App.css";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Menu from "./components/menu.js";
import ContactUs from "./components/contactUs.js";
import About from "./about.js";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/hhhhh" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
        </div>
      </Router>
    );
  }
}
export default App;
