import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const { onClick, value, loading } = props;
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />}
      {value}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
