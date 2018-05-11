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
  }

  componentWillMount() {
    axios.get(`${TOP_THIRTY_DAYS}`).then(response => {
      this.setState({ term: response.data });
    });
  }

  onClickAllTime(e) {
    //<i className="fas fa-arrow-up fa-xs" />
    console.log("on click");
    const clickedElement = e.target;
    console.log(clickedElement);
  }

  render() {
    // If there's no state yet, we are going to wait
    if (!this.state.term) {
      return "Loading...";
    }

    var keyVal = 1;
    const stuff = this.state.term.map(camper => {
      return (
        <CamperRow
          key={keyVal++}
          imageUrl={camper.img}
          username={camper.username}
          alltime={camper.alltime}
          recent={camper.recent}
        />
      );
    });

    return (
      <div className="table-responsive">
        <table className="table table-hover table-dark" id="example">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Camper Name</th>
              <th scope="col" onClick={this.onClickAllTime}>
                All time points
              </th>
              <th scope="col">Points in past 30 days</th>
            </tr>
          </thead>
          <tbody>{stuff}</tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;
