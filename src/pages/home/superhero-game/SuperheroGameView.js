import React from "react";
import Board from "./board/Board";
import Panel from "./panel/Panel";
import Button from "../../../components/button/Button";
import withTranslation from "./withTranslation";
import "./SuperheroGame.css";

function SuperheroGameView(props) {
  const { language, getTranslation, superheros, gameState, handlers } = props;
  const { downloadError = "", gameHeader = "" } = getTranslation(language, "SuperheroGameView");

  let board = null,
    panel = null,
    errorMessage = null;

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

export default withTranslation(SuperheroGameView);
