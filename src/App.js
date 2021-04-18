import React from 'react';
import './App.scss';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import CurrentStage from './pages/home/current-stage/CurrentStage';
import SuperheroGame from './pages/home/superhero-game/SuperheroGame';

function App() {
  const anchorText = 'Anchor';

  return (
    <>
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
    </>
  );
}

export default App;
