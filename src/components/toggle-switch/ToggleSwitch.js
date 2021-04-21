import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.scss';

export default function ToggleSwitch(props) {
  const { handleChange, id } = props;

  return (
    <label className="switch" htmlFor={id}>
      <input id={id} type="checkbox" onChange={handleChange} />
      <span className="slider" />
    </label>
  );
}

ToggleSwitch.propTypes = { handleChange: PropTypes.func, id: PropTypes.string };
ToggleSwitch.defaultProps = { handleChange: () => {}, id: 'switch' };
