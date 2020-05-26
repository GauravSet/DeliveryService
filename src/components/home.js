import React, { Component } from "react";
import "../App.css";
import firebase from "../firebase";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
    };
  }
  handleVolunteer() {
    console.log("Volunteer Clicked");
    firebase
      .database()
      .ref("users/" + this.props.user.uid)
      .set({
        type: "volunteer",
      });
  }
  handleNeed() {
    console.log("In Need Clicked");
    firebase
      .database()
      .ref("users/" + this.props.user.uid)
      .set({
        type: "inneed",
      });
  }
  render() {
    return (
      <body>
        <div className="selectType">
          <p className="whitetext">Please select what type of person you are</p>
          <button className="whitetext" onClick={this.handleVolunteer()}>
            Volunteer
          </button>
          <button className="whitetext" onClick={this.handleNeed()}>
            In Need
          </button>
        </div>
      </body>
    );
  }
}
export default home;
