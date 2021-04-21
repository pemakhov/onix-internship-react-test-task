import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeContext';
import Button from '../../components/button/Button';
import ToggleSwitch from '../../components/toggle-switch/ToggleSwitch';

export default function HeaderView(props) {
  const { handleButtonClick } = props;
  const logo = 'react.';
  const navInfo = 'info';
  const navGame = 'гра';
  const navLinks = 'посилання';
  const pageMainHeader = 'вивчаймо React';
  const pageSecondaryHeader = 'на інтернатурі в ONIX';
  const buttonCaption = 'в дизайні була кнопка';

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <header>
          <div className="container">
            <div id="logo">{logo}</div>
            <nav>
              <ul className={theme}>
                <li>
                  <a href="#info">{navInfo}</a>
                </li>
                <li>
                  <a href="#game">{navGame}</a>
                </li>
                <li>
                  <a href="#links">{navLinks}</a>
                </li>
                <li>
                  <ToggleSwitch
                    handleChange={() => toggleTheme()}
                    id="toggle-theme"
                  />
                </li>
              </ul>
            </nav>
          </div>
          <div className={`header-content ${theme}`}>
            <h2>{pageMainHeader}</h2>
            <div className="divider" />
            <h3>{pageSecondaryHeader}</h3>
            <Button onClick={handleButtonClick} value={buttonCaption} />
          </div>
        </header>
      )}
    </ThemeContext.Consumer>
  );
}

HeaderView.propTypes = {
  handleButtonClick: PropTypes.func,
};

HeaderView.defaultProps = {
  handleButtonClick: () => {},
};
