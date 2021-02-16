import React from "react";

export function BiographyTableRow(props) {
  return (
    <tr>
      <td>{props.year}</td>
      <td>{props.event}</td>
    </tr>
  );
}
