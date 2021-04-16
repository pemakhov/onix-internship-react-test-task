import React from "react";
import withTranslation from "../withTranslation";

function InfoArea(props) {
  const {
    language,
    getTranslation,
    active,
    chosen,
    gameOver,
    chosenSuperhero,
  } = props;
  const {
    task = "",
    successReport = "",
    failedReport = "",
  } = getTranslation(language, "InfoArea");

  const getInfo = (active, chosen, gameOver) => {
    if (!gameOver) {
      return (
        <>
          {task} <strong>{chosenSuperhero?.name}?</strong>
        </>
      );
    }

    if (active === chosen) {
      return <strong>{successReport}</strong>;
    }

    return <strong>{failedReport}</strong>;
  };

  const content = getInfo(active, chosen, gameOver);

  return <h3 className="task">{content}</h3>;
}

export default withTranslation(InfoArea);
