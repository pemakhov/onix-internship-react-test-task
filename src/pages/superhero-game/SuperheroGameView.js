import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LanguageContext from '../../contexts/language';
import Board from './board/Board';
import Panel from './panel/Panel';
import Button from '../../components/button/Button';
import withTranslation from './withTranslation';
import TSuperhero from './TSuperhero';
import './SuperheroGame.scss';

const SuperheroGameView = (props) => {
  const { toggleLanguage } = useContext(LanguageContext);
  const {
    language,
    getTranslation,
    superheros,
    gameState,
    handlers
  } = props;

  const { downloadError = '', gameHeader = '' } = getTranslation(language, 'SuperheroGameView');

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
        <Button value={language} onClick={toggleLanguage} />
      </h2>
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
  language: PropTypes.string,
  superheros: PropTypes.arrayOf(TSuperhero),
  getTranslation: PropTypes.func,
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
  language: '',
  superheros: [],
  getTranslation: () => [],
  gameState: {},
  handlers: {},
};

export default withTranslation(SuperheroGameView);
