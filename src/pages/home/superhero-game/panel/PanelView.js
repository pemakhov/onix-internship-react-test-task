import React from "react";
import Superhero from "./Superhero";
import ControlArea from "./ControlArea";
import InfoArea from "./InfoArea";
import withTranslation from "../withTranslation";
import getTranslation from "../translations";

export default function PanelView(props) {
  const { active, chosen, gameOver } = props.gameState;
  const { chosenSuperhero, language } = props;
  const superheroInfo = gameOver ? <Superhero data={chosenSuperhero} /> : null;

  const InfoAreaWithTranslation = withTranslation(InfoArea, () =>
    getTranslation(language, "InfoArea")
  );

  const ControlAreaWithTranslation = withTranslation(ControlArea, () =>
    getTranslation(language, "ControlArea")
  );

  return (
    <div className="game-panel">
      <InfoAreaWithTranslation
        active={active}
        chosen={chosen}
        gameOver={gameOver}
        chosenSuperhero={chosenSuperhero}
      />
      {/* <TestWithTranslation /> */}
      <ControlAreaWithTranslation
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
