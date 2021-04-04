import React from "react";
import { Button } from "../../page-elements/Button";

export function ControlArea(props) {
  const getContent = (active, gameOver) => {
    if (gameOver) {
      return <Button onClick={props.startNewGame} value={"Нова гра"} />;
    }

    if (active !== null) {
      return <Button onClick={props.handleButtonClick} value={"Перевірити"} />;
    }

    return (
      <>
        Обери фото супергероя мишкою або стрілочками та натисни кнопку
        "Перевірити" або Enter
      </>
    );
  };

  const content = getContent(props.active, props.gameOver);

  return <div className="control-area">{content}</div>;
}
