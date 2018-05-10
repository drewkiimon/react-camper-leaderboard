import React, { Component } from "react";
import Leaderboard from "./components/leaderboard";
import Navigation from "./components/navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <Leaderboard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
