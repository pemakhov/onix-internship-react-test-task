import React from "react";
import { PanelView } from "./PanelView";

export function Panel(props) {
  const { chosen } = props.gameState;
  const chosenSuperhero = props.superheros[chosen];

  if (!chosenSuperhero?.name) {
    props.replaceBrokenSuperhero(chosen);
  }

  return (
    <PanelView
      gameState={props.gameState}
      chosenSuperhero={chosenSuperhero}
      handleButtonClick={props.handleButtonClick}
      startNewGame={props.startNewGame}
    />
  );
}
