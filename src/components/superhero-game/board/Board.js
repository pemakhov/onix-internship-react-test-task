import React from "react";
import { Card } from "./Card";
import { BoardView } from "./BoardView";

export function Board(props) {
  const { superheros, gameState, handlers } = props;

  const getCardClassList = (index, gameState) => {
    const { chosen, active, gameOver } = gameState;
    const basicClass = "col";

    if (gameOver && chosen === index) {
      return (basicClass + " correct");
    }

    if (gameOver && active === index && chosen !== index) {
      return (basicClass + " wrong");
    }

    if (gameOver) {
      return (basicClass + " fade");
    }

    if (active === index) {
      return (basicClass + " active");
    }

    return basicClass;
  };

  const renderCard = (url, index, gameState, handlers) => {
    return (
      <Card
        url={url}
        key={index}
        index={index}
        classList={getCardClassList(index, gameState)}
        handleClick={() => handlers.handleClick(index)}
        replaceBrokenSuperhero={() => handlers.replaceBrokenSuperhero(index)}
        handleDragStart={handlers.handleDragStart}
        handleDragOver={handlers.handleDragOver}
        handleDrop={handlers.handleDrop}
      ></Card>
    );
  };

  const images = superheros.map((superhero) => superhero.image.url);
  const cards = images.map((image, index) =>
    renderCard(image, index, gameState, handlers)
  );

  return <BoardView cards={cards} />;
}
