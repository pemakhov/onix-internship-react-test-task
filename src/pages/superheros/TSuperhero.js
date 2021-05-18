import PropTypes from 'prop-types';

const TSuperhero = PropTypes.shape({
  name: PropTypes.string.isRequired,
  powerstats: PropTypes.shape({
    intelligence: PropTypes.string.isRequired,
    strength: PropTypes.string.isRequired,
    speed: PropTypes.string.isRequired,
    durability: PropTypes.string.isRequired,
    power: PropTypes.string.isRequired,
    combat: PropTypes.string.isRequired,
  }),
  biography: PropTypes.shape({
    alignment: PropTypes.string.isRequired,
  }),
  appearance: PropTypes.shape({
    gender: PropTypes.string.isRequired,
  }),
}).isRequired;

export default TSuperhero;
