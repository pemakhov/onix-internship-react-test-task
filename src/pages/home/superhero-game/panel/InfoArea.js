import React from "react";

export default function InfoArea(props) {
  const { active, chosen, gameOver, chosenSuperhero } = props;
  const { task = "", successReport = "", failedReport = "" } = props.translation;

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

    return <strong>{failedReport}</strong>
  };

  const content = getInfo(active, chosen, gameOver);

  return <h3 className="task">{content}</h3>;
}
