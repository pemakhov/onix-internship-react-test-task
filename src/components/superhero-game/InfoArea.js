import React from "react";

export function InfoArea(props) {
  const { active, chosen, gameOver, chosenSuperhero } = props;

  const getInfo = (active, chosen, gameOver) => {
    if (!gameOver) {
      return (
        <>
          Кто тут <strong>{chosenSuperhero?.name}?</strong>
        </>
      );
    }

    if (active === chosen) {
      return <strong>Что ж, на этот раз правильно.</strong>;
    }

    return <strong>Ну нет же!</strong>
  };

  const content = getInfo(active, chosen, gameOver);

  return <h3 className="task">{content}</h3>;
}
