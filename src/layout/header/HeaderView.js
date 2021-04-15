import React from "react";
import Button from "../../components/button/Button";

export function HeaderView(props) {
  const logo = "react.";
  const navInfo = "info";
  const navGame = "гра";
  const navLinks = "посилання";
  const pageMainHeader = "вивчаймо React";
  const pageSecondaryHeader = "на інтернатурі в ONIX";
  const buttonCaption = "в дизайні була кнопка";

  return (
    <header>
      <div className="container">
        <div id="logo">{logo}</div>
        <nav>
          <ul>
            <li>
              <a href="#info">{navInfo}</a>
            </li>
            <li>
              <a href="#game">{navGame}</a>
            </li>
            <li>
              <a href="#links">{navLinks}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-content">
        <h2>{pageMainHeader}</h2>
        <div className="divider"></div>
        <h3>{pageSecondaryHeader}</h3>
        <Button onClick={props.handleButtonClick} value={buttonCaption} />
      </div>
    </header>
  );
}
