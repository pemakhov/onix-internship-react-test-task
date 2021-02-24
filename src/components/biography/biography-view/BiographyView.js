import React from "react";
import { TableRow } from "./BiographyTableRow";

export function View(props) {
  const renderRow = (year, episode) => (
    <TableRow year={year} episode={episode} key={`${year}-${episode}`} />
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
                ? " ▼"
                : " ▲"}
            </th>
            <th onClick={props.handleEpisodeClick}>
              Событие
              {props.sortCriteria !== "episode"
                ? " ᐅ"
                : props.ascendEpisode
                ? " ▼"
                : " ▲"}
            </th>
          </tr>
        </thead>
        <tbody id="bio-content">
          {props.bio.map((row) => renderRow(row.year, row.episode))}
        </tbody>
      </table>
      <form
        onSubmit={(episode) => props.handleFormSubmit(episode)}
        autoComplete="off"
      >
        <label htmlFor="year-input">Год</label>
        <input
          id="year-input"
          type="text"
          name="year"
          onChange={(episode) => props.handleInputChange(episode)}
        />
        <label htmlFor="episode-input">Событие</label>
        <input
          id="episode-input"
          type="text"
          name="episode"
          onChange={(episode) => props.handleInputChange(episode)}
        />
        <button type="submit">Добавить</button>
      </form>
      <div className="error-message">{props.errorMessage}</div>
      <button type="submit" onClick={props.handleLastEpisodeRemove}>
        Удалить последнюю запись
      </button>
    </section>
  );
}
