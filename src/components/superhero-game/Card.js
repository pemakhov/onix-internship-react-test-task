import React from "react";

export function Card(props) {
  return (
    <div
      className={props.classList}
      key={props.index}
      onClick={() => props.handleClick()}
    >
      <img
        onError={props.replaceBrokenSuperhero}
        src={props.url}
        alt="classified"
      ></img>
    </div>
  );
}
