import React, { Component } from "react";
import firebase from "./firebase.js";
import "./App.css";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Menu from "./Menu.js";
import About from "./about.js"

class App extends Component {
  constructor() {
    super();
  }

  render() {
    let links = [
      {label: 'Home', link: '/home'},
      {label: 'About', link: '/about'},
      {label: 'Join Us', link: '#join'},
      {label: 'Contact Us', link: '#contact-us'},
    ];
    return (
      
      <Router>
        <div>
          <Route path='/' render={(props) => (<Menu {...props} links={links} />)}/>
          <Route path="/" component={Login} />
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
       
      </Router>
      
    );
  }
}
export default App;
