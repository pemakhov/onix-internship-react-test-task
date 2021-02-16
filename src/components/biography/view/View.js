import React from "react";
import { TableRow } from "../table-row/TableRow";

export function View(props) {
  const renderRow = (year, event) => (
    <TableRow year={year} event={event} key={year} />
  );

  const switchSearchLabel =
    "Сортировать даты используя алгоритм сортировки выбором";

  return (
    <section id="bio">
      <h2>{props.header}</h2>
      <input
        type="checkbox"
        id="heap-search"
        name="heapSearch"
        onChange={props.handleCustomSortCheck}
      />
      <label htmlFor="heap-search">{switchSearchLabel}</label>
      <table>
        <thead>
          <tr>
            <th onClick={props.handleYearClick}>Дата</th>
            <th onClick={props.handleEventClick}>Событие</th>
          </tr>
        </thead>
        <tbody id="bio-content">
          {props.bio.map((row) => renderRow(...row))}
        </tbody>
      </table>
      <form>
        <input type="text" name="year" />
        <input type="text" name="biography-event" />
        <button type="submit">Добавить</button>
      </form>
      <button type="submit">Удалить последнюю запись</button>
    </section>
  );
}
