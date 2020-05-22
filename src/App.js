import React, { Component } from "react";
import firebase from "./firebase.js";
import "./App.css";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Menu from "./Menu.js";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    let links = [
      {label: 'About', link: '#about'},
      {label: 'Join Us', link: '#join'},
      {label: 'Contact Us', link: '#contact-us'},
    ];
    return (
      
      <Router>
         <div className="container center">
            <Menu links={links}></Menu>
        </div> 
        <div>
          <Route path="/home" component={Home} />
          <Route path="/" component={Login} />
        </div>
       
      </Router>
      
    );
  }
}
export default App;
