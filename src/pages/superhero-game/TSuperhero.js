import PropTypes from 'prop-types';

const TSuperhero = PropTypes.shape({
  data: PropTypes.shape({
    name: PropTypes.string,
    biography: PropTypes.shape({
      alignment: PropTypes.string,
      // eslint-disable-next-line no-useless-computed-key
      ['full-name']: PropTypes.string,
    }),
    appearance: PropTypes.shape({
      gender: PropTypes.string,
      race: PropTypes.string,
      height: PropTypes.string,
      weight: PropTypes.string,
    }),
    work: PropTypes.shape({
      occupation: PropTypes.string,
      base: PropTypes.string,
    }),
    image: PropTypes.shape({
      url: PropTypes.string,
    })
  }),
});

export default TSuperhero;
