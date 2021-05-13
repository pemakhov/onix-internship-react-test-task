/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import BoardView from './BoardView';

const Board = (props) => {
  const { superheros, gameState, handlers } = props;

  const getCardClassList = (index, gameStateVars) => {
    const { chosen, active, gameOver } = gameStateVars;
    const basicClass = 'col';

    if (gameOver && chosen === index) {
      return `${basicClass} correct`;
    }

    if (gameOver && active === index && chosen !== index) {
      return `${basicClass} wrong`;
    }

    if (gameOver) {
      return `${basicClass} fade`;
    }

    if (active === index) {
      return `${basicClass} active`;
    }

    return basicClass;
  };

  const renderCard = (url, index, state, functions) => {
    return (
      <Card
        url={url}
        key={index}
        index={index}
        classList={getCardClassList(index, state)}
        handleClick={() => functions.handleClick(index)}
        replaceBrokenSuperhero={() => functions.replaceBrokenSuperhero(index)}
        handleDragStart={functions.handleDragStart}
        handleDragOver={functions.handleDragOver}
        handleDrop={functions.handleDrop}
      />
    );
  };

  const images = superheros.map((superhero) => superhero.image.url);
  const cards = images.map(
    (image, index) => renderCard(image, index, gameState, handlers)
  );

  return <BoardView cards={cards} />;
};

Board.propTypes = {
  superheros: PropTypes.any,
  gameState: PropTypes.any,
  handlers: PropTypes.any,
};

Board.defaultProps = {
  superheros: {},
  gameState: {},
  handlers: {},
};

export default Board;
