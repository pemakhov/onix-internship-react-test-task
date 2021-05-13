/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Superhero from './Superhero';
import ControlArea from './ControlArea';
import InfoArea from './InfoArea';

const PanelView = (props) => {
  const {
    chosenSuperhero,
    language,
    gameState,
    handleButtonClick,
    startNewGame,
  } = props;
  const { active, chosen, gameOver } = gameState;
  const superheroInfo = gameOver ? <Superhero data={chosenSuperhero} /> : null;

  return (
    <div className="game-panel">
      <InfoArea
        language={language}
        active={active}
        chosen={chosen}
        gameOver={gameOver}
        chosenSuperhero={chosenSuperhero}
      />
      <ControlArea
        language={language}
        active={active}
        chosen={chosen}
        gameOver={gameOver}
        handleButtonClick={handleButtonClick}
        startNewGame={startNewGame}
      />
      {superheroInfo}
    </div>
  );
};

PanelView.propTypes = {
  chosenSuperhero: PropTypes.any,
  language: PropTypes.string,
  gameState: PropTypes.any,
  handleButtonClick: PropTypes.func,
  startNewGame: PropTypes.func,
};

PanelView.defaultProps = {
  chosenSuperhero: {},
  language: '',
  gameState: {},
  handleButtonClick: () => {},
  startNewGame: () => {},
};

export default PanelView;
