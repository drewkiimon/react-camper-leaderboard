import React, { Component } from "react";
import Leaderboard from "./components/leaderboard";
import Navigation from "./components/navbar";

class App extends Component {
  dataTableStuff() {
    console.log("I was loaded properly on load");
  }
  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <Leaderboard onLoad={this.dataTableStuff} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
