import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext, themes } from './contexts/ThemeContext';
import { LanguageContext, languages } from './contexts/LanguageContext';
import Home from './pages/home/Home';
import SuperheroGame from './pages/superhero-game/SuperheroGame';
import Biography from './pages/biography/Biography';
import './App.scss';

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const [language, setLanguage] = useState(languages.ua);

  const toggleTheme = () => {
    const getTheme = (current, allThemes) => {
      const { dark, light } = allThemes;
      return current === dark ? light : dark;
    };

    setTheme((prev) => getTheme(prev, themes));
  };

  const toggleLanguage = () => {
    const getLanguage = (current, allLanguages) => {
      const { en, ua } = allLanguages;
      return current === en ? ua : en;
    };

    setLanguage((prev) => getLanguage(prev, languages));
  };

  return (
    <>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
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
