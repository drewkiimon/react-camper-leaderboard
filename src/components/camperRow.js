import React from "react";
import styles from "../camperRow.css";

const BASE_URL = "https://www.freecodecamp.org/";
var count = 1;

const CamperRow = props => {
  const url = `${BASE_URL}${props.username}`;
  return (
    <tr>
      <th scope="row">{count++}</th>
      <td className="user-name">
        <a href={url} target="_blank">
          <img
            className="imageIcon"
            src={props.imageUrl}
            width="32"
            height="32"
            alt="image"
          />
          &nbsp;{props.username}
        </a>
      </td>
      <td className="all-time">{props.alltime}</td>
      <td className="thirty-days">{props.recent}</td>
    </tr>
  );
};

export default CamperRow;
