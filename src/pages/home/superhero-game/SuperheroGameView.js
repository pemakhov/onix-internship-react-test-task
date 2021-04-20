/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Board from './board/Board';
import Panel from './panel/Panel';
import Button from '../../../components/button/Button';
import withTranslation from './withTranslation';
import './SuperheroGame.scss';

function SuperheroGameView(props) {
  // eslint-disable-next-line object-curly-newline
  const { language, getTranslation, superheros, gameState, handlers } = props;
  const { downloadError = '', gameHeader = '' } = getTranslation(
    language,
    'SuperheroGameView'
  );

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
        language={language}
        superheros={superheros}
        gameState={{
          chosen: gameState.chosen,
          active: gameState.active,
          gameOver: gameState.gameOver,
        }}
        handleButtonClick={handlers.handleCheckButtonClick}
        replaceBrokenSuperhero={handlers.replaceBrokenSuperhero}
        startNewGame={handlers.startNewGame}
      />
    );
  }

  if (gameState.apiError) {
    errorMessage = <h3>{downloadError}</h3>;
  }

  return (
    <section>
      <h2>
        <Button value={language} onClick={handlers.toggleLanguage} />
      </h2>
      <h2>{gameHeader}</h2>
      {errorMessage}
      <div id="superhero-game">
        {board}
        {panel}
      </div>
    </section>
  );
}

SuperheroGameView.propTypes = {
  language: PropTypes.string,
  superheros: PropTypes.any,
  getTranslation: PropTypes.func,
  gameState: PropTypes.any,
  handlers: PropTypes.any
};

SuperheroGameView.defaultProps = {
  language: '',
  superheros: [],
  getTranslation: () => [],
  gameState: {},
  handlers: {},
};

export default withTranslation(SuperheroGameView);
