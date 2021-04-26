/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const Superhero = (props) => {
  const { data } = props;
  const { name } = data || 'classified';
  const { alignment } = data?.biography || 'classified';
  const fullName = data?.biography?.full - name || 'classified';
  const { gender } = data?.appearance || 'classified';
  const work = data?.work?.occupation || 'classified';
  const { base } = data?.work || 'classified';
  const { race } = data?.appearance || 'classified';

  let height = data?.appearance?.height[1];
  height = !height || height[0] === '0' ? 'classified' : height;

  let weight = data?.appearance.weight[1];
  weight = !weight || weight[0] === '0' ? 'classified' : weight;

  return (
    <div>
      <h3>{name}</h3>
      <div className="divider" />
      <h4>True name: {fullName}</h4>
      <p>Race: {race}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Work: {work}</p>
      <p>Base: {base}</p>
      <p className={alignment}>{alignment?.toUpperCase()}</p>
    </div>
  );
};

Superhero.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any,
};

Superhero.defaultProps = {
  data: {},
};

export default Superhero;
