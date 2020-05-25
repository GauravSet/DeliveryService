import React, { Component } from "react";
import "../App.css";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase";
import Button from "@material-ui/core/Button";
import Home from "./home";
import Menu from "../Menu.js";
class login extends Component {
  constructor() {
    super();
    this.state = {
      links: [
        { label: "Home", link: "/home" },
        { label: "About", link: "/about" },
        { label: "Contact Us", link: "#/contact-us" },
      ],
    };
  }
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <body>
        <div>
          {user ? (
            <div className="Welcome">
              <p>Hello, {user.displayName}</p>
              <Menu links={this.state.links} />
              <Home />
            </div>
          ) : null}

          {user ? (
            <button onClick={signOut}>Sign out</button>
          ) : (
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          )}
        </div>
      </body>
    );
  }
}
const firebaseApp = firebase.initializeApp(config);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(login);
