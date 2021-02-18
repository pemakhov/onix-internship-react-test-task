import React from "react";
import { TableRow } from "./table-row/TableRow";

export function View(props) {
  const renderRow = (year, event) => (
    <TableRow year={year} event={event} key={`${year}-${event}`} />
  );

  const switchSearchLabel = "Использовать алгоритм сортировки выбором";

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
            <th onClick={props.handleYearClick}>
              Дата
              {props.sortCriteria !== "year"
                ? " ᐅ"
                : props.ascendYear
                ? "▼"
                : "▲"}
            </th>
            <th onClick={props.handleEventClick}>
              Событие
              {props.sortCriteria !== "event"
                ? " ᐅ"
                : props.ascendEvent
                ? "▼"
                : "▲"}
            </th>
          </tr>
        </thead>
        <tbody id="bio-content">
          {props.bio.map((row) => renderRow(...row))}
        </tbody>
      </table>
      <form
        onSubmit={(event) => props.handleFormSubmit(event)}
        autoComplete="off"
      >
        <label htmlFor="year-input">Год</label>
        <input
          id="year-input"
          type="text"
          name="year"
          onChange={(event) => props.handleInputChange(event)}
        />
        <label htmlFor="event-input">Событие</label>
        <input
          id="event-input"
          type="text"
          name="biography-event"
          onChange={(event) => props.handleInputChange(event)}
        />
        <button type="submit">Добавить</button>
      </form>
      <div id="error-message">{props.errorMessage}</div>
      <button type="submit" onClick={props.handleLastEventRemove}>
        Удалить последнюю запись
      </button>
    </section>
  );
}
