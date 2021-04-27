import React, { useContext } from 'react';
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

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
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
  );
};

export default Nav;
