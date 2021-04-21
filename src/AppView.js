import React from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import CurrentStage from './pages/home/current-stage/CurrentStage';
import SuperheroGame from './pages/home/superhero-game/SuperheroGame';
import './App.scss';

function AppView() {
  const anchorText = 'Anchor';

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div id="canvas" className={context.theme}>
          <div className={`container ${context.theme}`}>
            <Header />
            <main className={context.theme}>
              <a id="info" href="info" className="hidden-anchor">
                {anchorText}
              </a>
              <CurrentStage />
              <a id="game" href="game" className="hidden-anchor ">
                {anchorText}
              </a>
              <SuperheroGame />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default AppView;
