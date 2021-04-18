import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { onClick, value } = props;
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  value: 'button',
};
