/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    classList,
    index,
    handleClick,
    handleDragStart,
    handleDragOver,
    handleDrop,
    replaceBrokenSuperhero,
    url,
  } = props;

  return (
    <div
      draggable
      className={classList}
      data-key={index}
      onClick={() => handleClick()}
      onDragStart={handleDragStart}
      onDragOverCapture={handleDragOver}
      onDropCapture={handleDrop}
    >
      <img draggable="false" onError={replaceBrokenSuperhero} src={url} alt="classified" data-key={index} />
    </div>
  );
};

Card.propTypes = {
  classList: PropTypes.string,
  index: PropTypes.number,
  handleClick: PropTypes.func,
  handleDragStart: PropTypes.func,
  handleDragOver: PropTypes.func,
  handleDrop: PropTypes.func,
  replaceBrokenSuperhero: PropTypes.func,
  url: PropTypes.string,
};

Card.defaultProps = {
  classList: '',
  index: 0,
  handleClick: () => {},
  handleDragStart: () => {},
  handleDragOver: () => {},
  handleDrop: () => {},
  replaceBrokenSuperhero: () => {},
  url: '',
};

export default Card;
