import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import ToggleSwitch from '../../components/toggle-switch/ToggleSwitch';

const Nav = () => {
  const linkTexts = {
    home: 'Домашня сторінка',
    game: 'Гра',
    bio: 'Біографія',
    links: 'Посилання',
  };

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <nav>
          <ul className={theme}>
            <li>
              <Link to="/">{linkTexts.home}</Link>
            </li>
            <li>
              <Link to="/game">{linkTexts.game}</Link>
            </li>
            <li>
              <Link to="/bio">{linkTexts.bio}</Link>
            </li>
            <li>
              <a href="#links">{linkTexts.links}</a>
            </li>
            <li>
              <ToggleSwitch handleChange={() => toggleTheme()} id="toggle-theme" />
            </li>
          </ul>
        </nav>
      )}
    </ThemeContext.Consumer>
  );
};

export default Nav;
