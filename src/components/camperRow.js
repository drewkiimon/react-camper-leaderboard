import React from "react";

var count = 1;

const CamperRow = props => {
  return (
    <tr>
      <th scope="row">{count++}</th>
      <td>
        <img src={props.imageUrl} width="32" height="32" alt="image" />
        {props.username}
      </td>
      <td>{props.alltime}</td>
      <td>{props.recent}</td>
    </tr>
  );
};

export default CamperRow;
