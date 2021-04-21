import React, { Component } from 'react';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import CurrentStage from './pages/home/current-stage/CurrentStage';
import SuperheroGame from './pages/home/superhero-game/SuperheroGame';
import { ThemeContext, themes } from './contexts/ThemeContext';
import './App.scss';

class App extends Component {
  anchorText = 'Anchor';

  constructor(props) {
    super(props);
    this.state = { theme: themes.dark };
  }

  toggleTheme = () => {
    const getOpositeTheme = (current, allThemes) => {
      const { dark, light } = allThemes;
      console.log({ dark, light, current });
      return current === dark ? light : dark;
    };
    this.setState((prevState) => ({
      theme: getOpositeTheme(prevState.theme, themes),
    }));
  };

  render() {
    const { theme } = this.state;
    return (
      <>
        <ThemeContext.Provider value={theme}>
          <Header toggleTheme={this.toggleTheme} />
          <main className={theme}>
            <a id="info" href="info" className="hidden-anchor">
              {this.anchorText}
            </a>
            <CurrentStage />
            <a id="game" href="game" className="hidden-anchor ">
              {this.anchorText}
            </a>
            <SuperheroGame />
          </main>
          <Footer />
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
