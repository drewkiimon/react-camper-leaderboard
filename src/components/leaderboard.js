import React, { Component } from "react";
import CamperRow from "./camperRow";
import axios from "axios";

const TOP_THIRTY_DAYS =
  "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
const TOP_ALL_TIME = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };

    console.log(this.state);
  }

  componentDidMount() {
    console.log("Mounted");
    console.log(this.state.term);
  }

  componentWillMount() {
    console.log("This will mount.");
    axios.get(`${TOP_THIRTY_DAYS}`).then(response => {
      this.setState({ term: response.data });
    });
  }

  render() {
    if (!this.state.term) {
      return "Loading...";
    }

    console.log("rendered");

    const stuff = this.state.term.map(camper => {
      return (
        <CamperRow
          username={camper.username}
          alltime={camper.alltime}
          recent={camper.recent}
        />
      );
    });

    return (
      <div className="table-responsive">
        <table className="table table-hover table-dark table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">All Time</th>
              <th scope="col">Recent</th>
            </tr>
          </thead>
          <tbody>{stuff}</tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;
