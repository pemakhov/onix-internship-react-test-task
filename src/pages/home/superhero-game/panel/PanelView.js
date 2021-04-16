import React from "react";
import Superhero from "./Superhero";
import ControlAreaWithTranslation from "./ControlArea";
import InfoAreaWithTranslation from "./InfoArea";

export default function PanelView(props) {
  const { active, chosen, gameOver } = props.gameState;
  const { chosenSuperhero, language } = props;
  const superheroInfo = gameOver ? <Superhero data={chosenSuperhero} /> : null;

  return (
    <div className="game-panel">
      <InfoAreaWithTranslation
        language={language}
        active={active}
        chosen={chosen}
        gameOver={gameOver}
        chosenSuperhero={chosenSuperhero}
      />
      <ControlAreaWithTranslation
        language={language}
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
