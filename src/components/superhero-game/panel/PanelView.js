import React from "react";
import { Superhero } from "./Superhero";
import { ControlArea } from "./ControlArea";
import { InfoArea } from "./InfoArea";

export function PanelView(props) {
  const { active, chosen, gameOver } = props.gameState;
  const { chosenSuperhero } = props;
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
        startNewGame={props.startNewGame}
      />
      {superheroInfo}
    </div>
  );
}
