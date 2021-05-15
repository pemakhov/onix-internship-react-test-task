import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import i18n from './i18n';
import ThemeContext from './contexts/theme';
import themes from './constants/theme';
import LanguageContext from './contexts/language';
import languages from './constants/language';
import Home from './pages/home/Home';
import SuperheroGame from './pages/superhero-game/SuperheroGame';
import Biography from './pages/biography/Biography';
import './App.scss';

const App = () => {
  const defaultTheme = localStorage.getItem('theme') || themes.dark;
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    const getTheme = (current, allThemes) => {
      const { dark, light } = allThemes;
      return current === dark ? light : dark;
    };

    setTheme((prev) => {
      const nextTheme = getTheme(prev, themes);
      localStorage.setItem('theme', nextTheme);
      return nextTheme;
    });
  };

  const storeLanguage = (language) => {
    localStorage.setItem('language', language);
  };

  const toggleLanguage = () => {
    const getLanguage = (current, allLanguages) => {
      const { en, ua } = allLanguages;
      return current === en ? ua : en;
    };

    const nextLanguage = getLanguage(i18n.language, languages);

    storeLanguage(nextLanguage);
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <>
      <LanguageContext.Provider value={{ toggleLanguage }}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Router>
            <Switch>
              <Route path="/game">
                <SuperheroGame />
              </Route>
              <Route path="/bio">
                <Biography />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </>
  );
};

export default App;
