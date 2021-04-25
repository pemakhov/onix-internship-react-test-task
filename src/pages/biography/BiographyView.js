import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './BiographyTableRow';

const columnNames = {
  year: 'year',
  episode: 'episode',
};

const BiographyView = (props) => {
  const { data, handlers } = props;

  const renderRow = (year, episode) => <TableRow year={year} episode={episode} key={`${year}-${episode}`} />;

  const {
    bio,
    header,
    ascendYear,
    ascendEpisode,
    sortCriteria,
    errorMessage, 
  } = data;

  const {
    handleYearClick,
    handleEpisodeClick,
    handleCustomSortCheck,
    handleInputChange,
    handleFormSubmit,
    handleLastEpisodeRemove,
  } = handlers;

  const switchSearchLabel = 'Використовувати алгоритм сортування вибором';

  const getSortIcon = (criteria, column, ascend) => {
    if (criteria !== column) return ' ᐅ';
    if (ascend) return ' ▼';
    return ' ▲';
  };

  const yearColumnName = 'Рік';
  const episodeColumnName = 'Подія біографії';
  const addButtonText = 'Додати';
  const delButtonText = 'Видалити останнє';

  return (
    <section id="bio">
      <h2>{header}</h2>
      <input type="checkbox" id="heap-search" name="heapSearch" onChange={handleCustomSortCheck} />
      <label htmlFor="heap-search">{switchSearchLabel}</label>
      <table>
        <thead>
          <tr>
            <th onClick={handleYearClick}>
              {yearColumnName}
              {getSortIcon(sortCriteria, columnNames.year, ascendYear)}
            </th>
            <th onClick={handleEpisodeClick}>
              {episodeColumnName}
              {getSortIcon(sortCriteria, columnNames.episode, ascendEpisode)}
            </th>
          </tr>
        </thead>
        <tbody id="bio-content">{bio.map((row) => renderRow(row.year, row.episode))}</tbody>
      </table>
      <form onSubmit={(episode) => handleFormSubmit(episode)} autoComplete="off">
        <label htmlFor="year-input">
          {yearColumnName}
          <input id="year-input" type="text" name="year" onChange={(episode) => handleInputChange(episode)} />
        </label>
        <label htmlFor="episode-input">
          {episodeColumnName}
          <input id="episode-input" type="text" name="episode" onChange={(episode) => handleInputChange(episode)} />
        </label>
        <button type="submit">{addButtonText}</button>
      </form>
      <div className="error-message">{errorMessage}</div>
      <button type="submit" onClick={handleLastEpisodeRemove}>
        {delButtonText}
      </button>
    </section>
  );
};

BiographyView.propTypes = {
  data: PropTypes.shape({
    bio: PropTypes.arrayOf(PropTypes.shape({
      year: PropTypes.number,
      episode: PropTypes.string,
    })),
    header: PropTypes.string,
    ascendYear: PropTypes.bool,
    ascendEpisode: PropTypes.bool,
    sortCriteria: PropTypes.string,
    errorMessage: PropTypes.string,
  }),
  handlers: PropTypes.shape({
    handleYearClick: PropTypes.func,
    handleEpisodeClick: PropTypes.func,
    handleCustomSortCheck: PropTypes.func,
    handleInputChange: PropTypes.func,
    handleFormSubmit: PropTypes.func,
    handleLastEpisodeRemove: PropTypes.func,
  })
};

BiographyView.defaultProps = {
  data: {
    bio: [],
    header: '',
    ascendYear: true,
    ascendEpisode: false,
    sortCriteria: columnNames.year,
    errorMessage: '',
  },
  handlers: PropTypes.shape({
    handleYearClick: null,
    handleEpisodeClick: null,
    handleCustomSortCheck: null,
    handleInputChange: null,
    handleFormSubmit: null,
    handleLastEpisodeRemove: null,
  })
};

export default BiographyView;
