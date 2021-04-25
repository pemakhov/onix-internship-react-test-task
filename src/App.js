import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext, themes } from './contexts/ThemeContext';
import { LanguageContext, languages } from './contexts/LanguageContext';
import Home from './pages/home/Home';
import SuperheroGame from './pages/superhero-game/SuperheroGame';
import Biography from './pages/biography/Biography';
import './App.scss';

class App extends Component {
  anchorText = 'Anchor';

  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      language: languages.ua,
    };
  }

  toggleTheme = () => {
    const getTheme = (current, allThemes) => {
      const { dark, light } = allThemes;
      return current === dark ? light : dark;
    };

    this.setState((prevState) => ({
      theme: getTheme(prevState.theme, themes),
    }));
  };

  toggleLanguage = () => {
    const getLanguage = (current, allLanguages) => {
      const { en, ua } = allLanguages;
      return current === en ? ua : en;
    };

    this.setState((prevState) => ({
      language: getLanguage(prevState.language, languages),
    }));
  };

  render() {
    const { theme, language } = this.state;

    return (
      <>
        <LanguageContext.Provider value={{ language, toggleLanguage: this.toggleLanguage }}>
          <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
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
  }
}

export default App;
