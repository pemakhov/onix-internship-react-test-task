import React from "react";
import { Card } from "./Card";
import "./Board.css";

export function Board(props) {
  const renderCard = (url, index) => {
    const { chosen, active, gameOver } = props.gameState;

    let classList = "col";

    if (gameOver && chosen === index) {
      classList += " correct";
    } else if (gameOver && active === index && chosen !== index) {
      classList += " wrong";
    } else if (gameOver) {
      classList += " fade";
    } else if (active === index) {
      classList += " active";
    }

    return (
      <Card
        url={url}
        key={index}
        index={index}
        handleClick={() => props.handleClick(index)}
        classList={classList}
        replaceBrokenSuperhero={() => props.replaceBrokenSuperhero(index)}
        handleDragStart={props.handleDragStart}
        handleDragOver={props.handleDragOver}
        handleDrop={props.handleDrop}
      ></Card>
    );
  };

  const images = props.superheros.map((superhero) => superhero.image.url);

  return (
    <div id="superhero-board">
      <div className="row">
        {renderCard(images[0], 0)}
        {renderCard(images[1], 1)}
        {renderCard(images[2], 2)}
      </div>
      <div className="row">
        {renderCard(images[3], 3)}
        {renderCard(images[4], 4)}
        {renderCard(images[5], 5)}
      </div>
      <div className="row">
        {renderCard(images[6], 6)}
        {renderCard(images[7], 7)}
        {renderCard(images[8], 8)}
      </div>
    </div>
  );
}
