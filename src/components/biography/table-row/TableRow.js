import React from "react";

export function TableRow(props) {
  return (
    <tr>
      <td>{props.year}</td>
      <td>{props.event}</td>
    </tr>
  );
}
