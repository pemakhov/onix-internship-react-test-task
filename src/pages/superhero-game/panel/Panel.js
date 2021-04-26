import React from 'react';
import PropTypes from 'prop-types';
import TSuperhero from './Superhero';
import PanelView from './PanelView';

const Panel = (props) => {
  const {
    language,
    gameState,
    superheros,
    handleButtonClick,
    startNewGame,
  } = props;

  const { chosen } = gameState;

  const chosenSuperhero = superheros[chosen];

  return (
    <PanelView
      language={language}
      gameState={gameState}
      chosenSuperhero={chosenSuperhero}
      handleButtonClick={handleButtonClick}
      startNewGame={startNewGame}
    />
  );
};

Panel.propTypes = {
  language: PropTypes.string,
  superheros: PropTypes.arrayOf(TSuperhero),
  gameState: PropTypes.shape({
    chosen: PropTypes.number,
    active: PropTypes.number,
    gameOver: PropTypes.bool,
  }),
  handleButtonClick: PropTypes.func,
  startNewGame: PropTypes.func,
};

Panel.defaultProps = {
  language: '',
  gameState: {},
  superheros: [],
  handleButtonClick: () => {},
  startNewGame: () => {},
};

export default Panel;
