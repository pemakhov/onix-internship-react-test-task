import React from "react";
import { Superhero } from "./Superhero";
import { ControlArea } from "./ControlArea";
import { InfoArea } from "./InfoArea";

export function Panel(props) {
  const { active, chosen, gameOver } = props.gameState;
  const chosenSuperhero = props.superheros[chosen];

  if (!chosenSuperhero?.name) {
    props.replaceBrokenSuperhero(chosen);
  }

  const superheroInfo = gameOver ? <Superhero data={chosenSuperhero} /> : null;

  return (
    <div className="game-panel">
      <InfoArea 
        active={active}
        chosen={chosen}
        gameOver={gameOver}
        chosenSuperhero={chosenSuperhero}
      />
      <ControlArea
        active={active}
        chosen={chosen}
        gameOver={gameOver}
        handleButtonClick={props.handleButtonClick}
        initNewGame={props.initNewGame}
      />
      {superheroInfo}
    </div>
  );
}
