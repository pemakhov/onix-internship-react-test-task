import React, { Component } from "react";
import CustomMath from "../../../service/CustomMath";
import SuperheroGameView from "./SuperheroGameView";
import withTranslation from "./withTranslation";
import getTranslation from "./translations";

export default class SuperheroGame extends Component {
  initialState = {
    superheros: [],
    reserve: [],
    chosen: null,
    active: null,
    gameOver: false,
    loaded: false,
    apiError: null,
    language: "ua", // "ua" or "en"
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  URL = "https://www.superheroapi.com/api.php/10159321593748921/";
  MIN_ID = 1;
  MAX_ID = 731;
  SUPERHEROS_TO_SHOW = 9;
  RESERVE_OF_SUPERHEROS = 5;

  async getOneSuperhero(url) {
    const response = await fetch(url);
    const superhero = await response.json();
    return superhero;
  }

  async getSuperherosByIdList(idList) {
    const superheroPromises = idList.map((id) => {
      const url = this.URL + id;
      return this.getOneSuperhero(url);
    });

    return await Promise.all(superheroPromises);
  }

  handleCardClick = (i) => {
    if (this.state.gameOver) {
      return;
    }
    if (this.state.active === i) {
      return;
    }
    this.setState({ active: i });
  };

  handleCheckButtonClick = () => {
    this.setState({ gameOver: true });
  };

  toggleLanguage = () => {
    this.setState((prevState) => {
      const newLanguage = prevState.language === "ua" ? "en" : "ua";
      return { language: newLanguage };
    });
  };

  replaceBrokenSuperhero = (n) => {
    alert(
      "Де-які дані супергероя не завантажились і супергерой буде замінений"
    );

    if (this.state.reserve.length === 0) {
      return;
    }

    const updatedSuperheros = [...this.state.superheros];
    const updatedReserve = [...this.state.reserve];

    updatedSuperheros[n] = updatedReserve.pop();

    this.setState({ superheros: updatedSuperheros, reserve: updatedReserve });
  };

  addKeyboardControl() {
    const handleKeyDown = (event) => {
      const arrowKeys = [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Enter",
      ];

      if (!arrowKeys.includes(event.key)) {
        return;
      }

      event.preventDefault();

      if (this.state.gameOver) {
        return;
      }

      if (this.state.active === null) {
        this.setState({ active: 0 });
        return;
      }

      let nextActive = 0;

      switch (event.key) {
        case "Enter":
          if (this.state.active !== null && !this.state.gameOver) {
            this.setState({ gameOver: true });
            return;
          }
          break;

        case "ArrowLeft":
          nextActive =
            ((this.state.active + 3 - 1) % 3) +
            Math.floor(this.state.active / 3) * 3;
          break;

        case "ArrowRight":
          nextActive =
            ((this.state.active + 3 + 1) % 3) +
            Math.floor(this.state.active / 3) * 3;
          break;

        case "ArrowUp":
          nextActive =
            (this.state.active + this.SUPERHEROS_TO_SHOW - 3) %
            this.SUPERHEROS_TO_SHOW;
          break;

        case "ArrowDown":
          nextActive = (this.state.active + 3) % this.SUPERHEROS_TO_SHOW;
          break;

        default:
          console.log("something went wrong");
      }

      this.setState({ active: nextActive });
    };

    window.removeEventListener("keydown", handleKeyDown);
    window.addEventListener("keydown", handleKeyDown);
  }

  replaceTwoSuperheros = (x, y, superheros) => {
    const updatedSuperheros = [...superheros];
    const superheroX = updatedSuperheros[x];
    updatedSuperheros[x] = updatedSuperheros[y];
    updatedSuperheros[y] = superheroX;

    return updatedSuperheros;
  };

  updateChosenIndex = (x, y, chosen) => {
    if (chosen !== x && chosen !== y) {
      return chosen;
    }

    return chosen === x ? y : x;
  };

  handleDragStart = (event) => {
    if (this.state.gameOver) {
      return;
    }

    event.dataTransfer.setData(
      "text/plain",
      event.target.getAttribute("data-key")
    );
    event.dataTransfer.effectAllowed = "move";
  };

  handleDragOver = (event) => {
    if (this.state.gameOver) {
      return;
    }

    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  handleDrop = (event) => {
    if (this.state.gameOver) {
      return;
    }

    event.preventDefault();
    const sourceKey = parseInt(event.dataTransfer.getData("text/plain"));
    const targetKey = parseInt(event.target.getAttribute("data-key"));

    const updatedSuperheros = this.replaceTwoSuperheros(
      sourceKey,
      targetKey,
      this.state.superheros
    );

    const updatedChosen = this.updateChosenIndex(
      sourceKey,
      targetKey,
      this.state.chosen
    );

    this.setState({ superheros: updatedSuperheros, chosen: updatedChosen });
  };

  /**
   * Inits the game
   */
  init = async () => {
    const idList = CustomMath.getArrayOfRandomNumbersInRange({
      length: this.SUPERHEROS_TO_SHOW + this.RESERVE_OF_SUPERHEROS,
      range: {
        min: this.MIN_ID,
        max: this.MAX_ID,
      },
    });

    try {
      const superheros = await this.getSuperherosByIdList(idList);
      const failures = superheros
        .map((superhero) => superhero?.response === "error")
        .filter((x) => x);

      if (failures.length > 2) {
        throw new Error("Failed to load too many superheros");
      }

      this.setState({
        superheros: superheros.slice(0, this.SUPERHEROS_TO_SHOW),
        reserve: superheros.slice(this.SUPERHEROS_TO_SHOW),
        chosen: CustomMath.getRandomNumberInRange(
          0,
          this.SUPERHEROS_TO_SHOW - 1
        ),
        active: null,
        gameOver: false,
        loaded: true,
      });
    } catch (apiError) {
      this.setState({ apiError });
    }
  };

  startNewGame = () => {
    this.setState({ gameOver: false });
  };

  componentDidMount() {
    this.init();
    this.addKeyboardControl();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!(prevState.gameOver && !this.state.gameOver)) {
      return;
    }

    this.setState(this.initialState);
    this.init();
  }

  SuperheroGameViewWithTranslation = withTranslation(SuperheroGameView, () =>
    getTranslation(this.state.language, "SuperheroGameView")
  );

  render() {
    return (
      <this.SuperheroGameViewWithTranslation
        language={this.state.language}
        superheros={this.state.superheros}
        gameState={{
          chosen: this.state.chosen,
          active: this.state.active,
          gameOver: this.state.gameOver,
          loaded: this.state.loaded,
          apiError: this.state.apiError,
        }}
        handlers={{
          handleCardClick: this.handleCardClick,
          replaceBrokenSuperhero: this.replaceBrokenSuperhero,
          handleDragStart: this.handleDragStart,
          handleDragOver: this.handleDragOver,
          handleDrop: this.handleDrop,
          handleCheckButtonClick: this.handleCheckButtonClick,
          startNewGame: this.startNewGame,
          toggleLanguage: this.toggleLanguage,
        }}
      />
    );
  }
}
