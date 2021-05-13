import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Board from './board/Board';
import Panel from './panel/Panel';
import TSuperhero from './TSuperhero';
import './SuperheroGame.scss';

const SuperheroGameView = (props) => {
  const [t] = useTranslation();

  const {
    superheros,
    gameState,
    handlers
  } = props;

  const downloadError = t('superheroGame.SuperheroGameView.downloadError');
  const gameHeader = t('superheroGame.SuperheroGameView.gameHeader');

  let board = null;
  let panel = null;
  let errorMessage = null;

  if (gameState.loaded && !gameState.apiError) {
    board = (
      <Board
        superheros={superheros}
        gameState={{
          chosen: gameState.chosen,
          active: gameState.active,
          gameOver: gameState.gameOver,
        }}
        handlers={{
          handleClick: handlers.handleCardClick,
          replaceBrokenSuperhero: handlers.replaceBrokenSuperhero,
          handleDragStart: handlers.handleDragStart,
          handleDragOver: handlers.handleDragOver,
          handleDrop: handlers.handleDrop,
        }}
      />
    );

    panel = (
      <Panel
        superheros={superheros}
        gameState={{
          chosen: gameState.chosen,
          active: gameState.active,
          gameOver: gameState.gameOver,
        }}
        handleButtonClick={handlers.handleCheckButtonClick}
        startNewGame={handlers.startNewGame}
      />
    );
  }

  if (gameState.apiError) {
    errorMessage = <h3>{downloadError}</h3>;
  }

  return (
    <section>
      <h2>{gameHeader}</h2>
      {errorMessage}
      <div id="superhero-game">
        {board}
        {panel}
      </div>
    </section>
  );
};

SuperheroGameView.propTypes = {
  superheros: PropTypes.arrayOf(TSuperhero),
  gameState: PropTypes.shape({
    chosen: PropTypes.number,
    active: PropTypes.number,
    gameOver: PropTypes.bool,
    loaded: PropTypes.bool,
    apiError: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
  handlers: PropTypes.shape({
    handleCardClick: PropTypes.func,
    replaceBrokenSuperhero: PropTypes.func,
    handleDragStart: PropTypes.func,
    handleDragOver: PropTypes.func,
    handleDrop: PropTypes.func,
    handleCheckButtonClick: PropTypes.func,
    startNewGame: PropTypes.func,
  }),
};

SuperheroGameView.defaultProps = {
  superheros: [],
  gameState: {},
  handlers: {},
};

export default SuperheroGameView;
