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

  return (
    <div id="superhero-board">
      <div className="row">
        {renderCard(props.superheroImageUrls[0], 0)}
        {renderCard(props.superheroImageUrls[1], 1)}
        {renderCard(props.superheroImageUrls[2], 2)}
      </div>
      <div className="row">
        {renderCard(props.superheroImageUrls[3], 3)}
        {renderCard(props.superheroImageUrls[4], 4)}
        {renderCard(props.superheroImageUrls[5], 5)}
      </div>
      <div className="row">
        {renderCard(props.superheroImageUrls[6], 6)}
        {renderCard(props.superheroImageUrls[7], 7)}
        {renderCard(props.superheroImageUrls[8], 8)}
      </div>
    </div>
  );
}
