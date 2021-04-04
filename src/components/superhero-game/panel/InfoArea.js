import React from "react";

export function InfoArea(props) {
  const { active, chosen, gameOver, chosenSuperhero } = props;

  const getInfo = (active, chosen, gameOver) => {
    if (!gameOver) {
      return (
        <>
          Хто тут <strong>{chosenSuperhero?.name}?</strong>
        </>
      );
    }

    if (active === chosen) {
      return <strong>Що ж, цього разу вірно.</strong>;
    }

    return <strong>Та ну ні!</strong>
  };

  const content = getInfo(active, chosen, gameOver);

  return <h3 className="task">{content}</h3>;
}
