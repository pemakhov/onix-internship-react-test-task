import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
  const { year, episode } = props;

  return (
    <tr>
      <td>{year}</td>
      <td>{episode}</td>
    </tr>
  );
};

TableRow.propTypes = {
  year: PropTypes.number,
  episode: PropTypes.string,
};

TableRow.defaultProps = {
  year: 1982,
  episode: '',
};

export default TableRow;
