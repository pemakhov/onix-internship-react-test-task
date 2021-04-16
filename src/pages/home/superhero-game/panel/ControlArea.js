import React from "react";
import Button from "../../../../components/button/Button";
import withTranslation from "../withTranslation";

function ControlArea(props) {
  const { language, getTranslation } = props;
  const {
    task = "",
    newGameButtonText = "",
    checkButtonText = "",
  } = getTranslation(language, "ControlArea");

  const getContent = (active, gameOver) => {
    if (gameOver) {
      return <Button onClick={props.startNewGame} value={newGameButtonText} />;
    }

    if (active !== null) {
      return (
        <Button onClick={props.handleButtonClick} value={checkButtonText} />
      );
    }

    return <>{task}</>;
  };

  const content = getContent(props.active, props.gameOver);

  return <div className="control-area">{content}</div>;
}

export default withTranslation(ControlArea);
