/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import PanelView from './PanelView';

export default function Panel(props) {
  const {
    language,
    gameState,
    superheros,
    handleButtonClick,
    startNewGame,
    replaceBrokenSuperhero,
  } = props;

  const { chosen } = gameState;

  const chosenSuperhero = superheros[chosen];

  if (!chosenSuperhero?.name) {
    replaceBrokenSuperhero(chosen);
  }

  return (
    <PanelView
      language={language}
      gameState={gameState}
      chosenSuperhero={chosenSuperhero}
      handleButtonClick={handleButtonClick}
      startNewGame={startNewGame}
    />
  );
}

Panel.propTypes = {
  language: PropTypes.string,
  gameState: PropTypes.any,
  superheros: PropTypes.any,
  handleButtonClick: PropTypes.func,
  startNewGame: PropTypes.func,
  replaceBrokenSuperhero: PropTypes.func,
};

Panel.defaultProps = {
  language: '',
  gameState: {},
  superheros: [],
  handleButtonClick: () => {},
  startNewGame: () => {},
  replaceBrokenSuperhero: () => {},
};
