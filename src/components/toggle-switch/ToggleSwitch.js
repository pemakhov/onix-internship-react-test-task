import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.scss';

const ToggleSwitch = (props) => {
  const { handleChange, id } = props;

  return (
    <label className="switch" htmlFor={id}>
      <input id={id} type="checkbox" onChange={handleChange} />
      <span className="slider" />
    </label>
  );
};

export default ToggleSwitch;

ToggleSwitch.propTypes = { handleChange: PropTypes.func, id: PropTypes.string };
ToggleSwitch.defaultProps = { handleChange: () => {}, id: 'switch' };
