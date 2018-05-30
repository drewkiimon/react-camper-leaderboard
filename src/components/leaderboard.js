import React, { Component } from "react";
import CamperRow from "./camperRow";
import axios from "axios";

const TOP = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  componentWillMount() {
    axios.get(`${TOP}`).then(response => {
      this.setState({ term: response.data });
    });
  }

  onClickAllTime(n) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("mainTable");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.getElementsByTagName("tr");
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;

        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];

        if (dir === "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        } else if (dir === "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount === 0 && dir === "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
    var newRows = table.getElementsByTagName("tr");
    for (i = 1; i < newRows.length - 1; i++) {
      newRows[i].getElementsByTagName("th")[0].innerHTML = i;
    }
  }

  render() {
    // If there's no state yet, we are going to wait
    if (!this.state.term) {
      return "Loading...";
    }

    const stuff = this.state.term.map(camper => {
      return (
        <CamperRow
          key={camper.username}
          imageUrl={camper.img}
          username={camper.username}
          alltime={camper.alltime}
          recent={camper.recent}
        />
      );
    });

    return (
      <div className="table-responsive">
        <table className="table table-hover table-dark" id="mainTable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Camper Name</th>
              <th
                scope="col"
                className="pointerLife"
                onClick={() => this.onClickAllTime(1)}
              >
                All time points
              </th>
              <th
                scope="col"
                className="pointerLife"
                onClick={() => this.onClickAllTime(2)}
              >
                Points in past 30 days
              </th>
            </tr>
          </thead>
          <tbody>{stuff}</tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;
