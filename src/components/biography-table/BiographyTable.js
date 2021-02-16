import React from "react";
import { BiographyTableRow } from "../biography-table-row/BiographyTableRow";

export function BiographyTable(props) {
  const renderRow = (year, event) => (
    <BiographyTableRow year={year} event={event} key={year} />
  );

  return (
    <section id="bio">
      <h2>{props.header}</h2>
      <input type="checkbox" id="heap-search" name="heapSearch" />
      <label for="heap-search">Сортировать даты используя алгоритм бинарной кучи</label>
      <table>
        <thead>
          <tr>
            <th onClick={props.handleYearClick}>
              Дата {props.sortCriteria !== 'year' ? "ᐅ" : props.ascendYear ? "▼" : "▲"}
            </th>
            <th onClick={props.handleEventClick}>
              Событие {props.sortCriteria !== 'event' ? "ᐅ" : props.ascendEvent ? "▼" : "▲"}
            </th>
          </tr>
        </thead>
        <tbody id="bio-content">
          {props.bio.map((row) => renderRow(...row))}
        </tbody>
      </table>
    </section>
  );
}
