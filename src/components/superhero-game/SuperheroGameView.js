import React from "react";
import { Board } from "./board/Board";
import { Panel } from "./panel/Panel";
import "./SuperheroGame.css";

export function SuperheroGameView(props) {
  const { superheros, gameState, handlers } = props;

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
        superheros={superheros}
        gameState={{
          chosen: gameState.chosen,
          active: gameState.active,
          gameOver: gameState.gameOver,
        }}
        handleButtonClick={handlers.handleCheckButtonClick}
        replaceBrokenSuperhero={handlers.replaceBrokenSuperhero}
        initNewGame={handlers.initNewGame}
      />
    );
  }

  if (gameState.apiError) {
    errorMessage = <h3>Помилка завантаження даних</h3>;
  }

  const gameHeader = "Чи ти добре знаєш супергероїв?";

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
}
