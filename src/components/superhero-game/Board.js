import React from "react";
import { Card } from "./Card";
import "./Board.css";

export function Board(props) {
  const renderSquare = (url, index) => {
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
        handleClick={() => props.handleClick(index)}
        classList={classList}
        replaceBrokenSuperhero={() => props.replaceBrokenSuperhero(index)}
      ></Card>
    );
  };

  return (
    <div id="superhero-board">
      <div className="row">
        {renderSquare(props.superheroImageUrls[0], 0)}
        {renderSquare(props.superheroImageUrls[1], 1)}
        {renderSquare(props.superheroImageUrls[2], 2)}
      </div>
      <div className="row">
        {renderSquare(props.superheroImageUrls[3], 3)}
        {renderSquare(props.superheroImageUrls[4], 4)}
        {renderSquare(props.superheroImageUrls[5], 5)}
      </div>
      <div className="row">
        {renderSquare(props.superheroImageUrls[6], 6)}
        {renderSquare(props.superheroImageUrls[7], 7)}
        {renderSquare(props.superheroImageUrls[8], 8)}
      </div>
    </div>
  );
}
