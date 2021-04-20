import React from 'react';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import CurrentStage from './pages/home/current-stage/CurrentStage';
import SuperheroGame from './pages/home/superhero-game/SuperheroGame';
import { ThemeContext } from './contexts/ThemeContext';
import './App.scss';

function App() {
  const anchorText = 'Anchor';

  return (
    <>
      <ThemeContext.Provider>
        <Header />
        <main>
          <a id="info" href="info" className="hidden-anchor">
            {anchorText}
          </a>
          <CurrentStage />
          <a id="game" href="game" className="hidden-anchor">
            {anchorText}
          </a>
          <SuperheroGame />
        </main>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
