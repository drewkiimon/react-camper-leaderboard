import React, { Component } from "react";

const CamperRow = () => {
  return (
    <tr>
      <th scope="row">{this.props.count}</th>
      <td>{this.props.username}</td>
      <td>{this.props.alltime}</td>
      <td>{this.props.recent}</td>
    </tr>
  );
};

export default CamperRow;
