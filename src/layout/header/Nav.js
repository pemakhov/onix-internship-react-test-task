import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../contexts/theme';
import ToggleSwitch from '../../components/toggle-switch/ToggleSwitch';
import LanguageContext from '../../contexts/language';

const Nav = () => {
  const { t, i18n } = useTranslation();
  const { toggleLanguage } = useContext(LanguageContext);

  const home = t('nav.home');
  const game = t('nav.game');
  const bio = t('nav.bio');
  const links = t('nav.links');

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <ul className={theme}>
        <li>
          <Link to="/">{home}</Link>
        </li>
        <li>
          <Link to="/game">{game}</Link>
        </li>
        <li>
          <Link to="/bio">{bio}</Link>
        </li>
        <li>
          <a href="#links">{links}</a>
        </li>
        <li>
          <a href="/#" onClick={() => toggleLanguage()}>{i18n.language}</a>
        </li>
        <li>
          <ToggleSwitch handleChange={() => toggleTheme()} id="toggle-theme" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
