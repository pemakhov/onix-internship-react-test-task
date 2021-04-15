import React from "react";

export default function Card(props) {
  return (
    <div
      draggable={true}
      className={props.classList}
      data-key={props.index}
      onClick={() => props.handleClick()}
      onDragStart={props.handleDragStart}
      onDragOverCapture={props.handleDragOver}
      onDropCapture={props.handleDrop}
    >
      <img
        draggable="false"
        onError={props.replaceBrokenSuperhero}
        src={props.url}
        alt="classified"
        data-key={props.index}
      ></img>
    </div>
  );
}
