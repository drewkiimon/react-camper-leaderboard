import React, { Component } from "react";

var count = 1;

const CamperRow = props => {
  return (
    <tr>
      <th scope="row">{count++}</th>
      <td>{props.username}</td>
      <td>{props.alltime}</td>
      <td>{props.recent}</td>
    </tr>
  );
};

export default CamperRow;
