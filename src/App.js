import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { CurrentStage } from "./components/current-stage/CurrentStage";
import { SuperheroGame } from "./components/superhero-game/SuperheroGame";

function App() {
  const anchorText = "Anchor";

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
