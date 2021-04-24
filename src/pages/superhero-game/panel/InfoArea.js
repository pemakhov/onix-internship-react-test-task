/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import withTranslation from '../withTranslation';

function InfoArea(props) {
  const {
    language,
    getTranslation,
    active,
    chosen,
    gameOver,
    chosenSuperhero,
  } = props;
  const { task = '', successReport = '', failedReport = '' } = getTranslation(
    language,
    'InfoArea'
  );

  const getInfo = (activeProp, chosenProp, gameOverProp) => {
    if (!gameOverProp) {
      return (
        <>
          {task} <strong>{chosenSuperhero?.name}?</strong>
        </>
      );
    }

    if (activeProp === chosenProp) {
      return <strong>{successReport}</strong>;
    }

    return <strong>{failedReport}</strong>;
  };

  const content = getInfo(active, chosen, gameOver);

  return <h3 className="task">{content}</h3>;
}

InfoArea.propTypes = {
  language: PropTypes.string,
  active: PropTypes.number,
  chosen: PropTypes.number,
  gameOver: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  chosenSuperhero: PropTypes.any,
  getTranslation: PropTypes.func,
};

InfoArea.defaultProps = {
  language: '',
  active: 0,
  chosen: 0,
  gameOver: false,
  chosenSuperhero: {},
  getTranslation: () => {},
};

export default withTranslation(InfoArea);
