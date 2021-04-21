import React, { Component } from 'react';
import { ThemeContext, themes } from './contexts/ThemeContext';
import AppView from './AppView';

class App extends Component {
  anchorText = 'Anchor';

  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
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

  render() {
    const { theme } = this.state;

    return (
      <>
        <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
          <AppView />
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
