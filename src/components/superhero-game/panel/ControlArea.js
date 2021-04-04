import React from "react";
import { Button } from "../../page-elements/Button";

export function ControlArea(props) {
  const getContent = (active, gameOver) => {
    if (gameOver) {
      return <Button onClick={props.initNewGame} value={"Новая игра"} />;
    }

    if (active !== null) {
      return <Button onClick={props.handleButtonClick} value={"Проверить"} />;
    }

    return <>Выбери фото супергероя мышью или стрелками на клавиатуре</>;
  };

  const content = getContent(props.active, props.gameOver);

  return <div className="control-area">{content}</div>;
}
