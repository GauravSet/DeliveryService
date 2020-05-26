import React, { Component } from "react";
import "../App.css";

class contactUs extends Component {
  constructor() {
    super();
  }
  handleVolunteer() {
    console.log("Volunteer Clicked");
  }
  handleNeed() {
    console.log("In Need Clicked");
  }
  render() {
    return (
      <header>
        Welcome!
        <button onClick={this.handleVolunteer()}>Volunteer</button>
        <button onClick={this.handleNeed()}>In Need</button>
      </header>
    );
  }
}
export default contactUs;
