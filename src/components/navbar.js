import React from "react";
import logo from "./AP.png";

const Navigation = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="http://www.andrewpagan.me/">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Camper Leaderboard
      </a>
    </nav>
  );
};

export default Navigation;
