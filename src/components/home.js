import React, { Component } from "react";
import "../App.css";

class home extends Component {
  constructor() {
    super();
  }
  handleVolunteer(){
    console.log('Volunteer Clicked')
  }
  handleNeed()
  {
    console.log('In Need Clicked')
  }
  render() {
    
    return (
      <body>
        <button onClick={this.handleVolunteer()}>Volunteer</button>
        <button onClick={this.handleNeed()}>In Need</button>
      </body>
    );
  }
}
export default home;
