import React, { Component } from "react";
import CustomMath from "../../service/CustomMath";
import { Board } from "./Board";
import { Panel } from "./Panel";
import "./SuperheroGame.css";

export class SuperheroGame extends Component {
  initialState = {
    superheros: [],
    reserve: [],
    chosen: null,
    active: null,
    gameOver: false,
    loaded: false,
    apiError: null,
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  URL = "https://www.superheroapi.com/api.php/10159321593748921/";
  MIN_ID = 1;
  MAX_ID = 732;
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

  getSuperheroImageUrls() {
    return this.state.superheros.map((superhero) => superhero.image.url);
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
    if (this.state.active === this.state.chosen) {
    }
    this.setState({ gameOver: true });
  };

  replaceBrokenSuperhero = (n) => {
    alert("Картинка супергероя не грузится и герой будет заменен");

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
      const arrowKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

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
        case "ArrowLeft":
          nextActive =
            (this.state.active + this.SUPERHEROS_TO_SHOW - 1) %
            this.SUPERHEROS_TO_SHOW;
          break;

        case "ArrowRight":
          nextActive = (this.state.active + 1) % this.SUPERHEROS_TO_SHOW;
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

  replaceTwoSuperheros = (x, y) => {
    const updatedSuperheros = [...this.state.superheros];
    const superheroX = updatedSuperheros[x];
    updatedSuperheros[x] = updatedSuperheros[y];
    updatedSuperheros[y] = superheroX;

    this.setState({ superheros: updatedSuperheros });
  };

  handleDragStart = (event) => {
    event.dataTransfer.setData(
      "text/plain",
      event.target.getAttribute("data-key")
    );
    event.dataTransfer.effectAllowed = "move";
  };

  handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  handleDrop = (event) => {
    event.preventDefault();
    const sourceKey = event.dataTransfer.getData("text/plain");
    const targetKey = event.target.getAttribute("data-key");

    this.replaceTwoSuperheros(sourceKey, targetKey);
  };

  /**
   * Inits the game
   */
  init = async () => {
    if (this.state.gameOver) {
      this.setState(this.initialState);
    }

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

  componentDidMount() {
    this.init();
    this.addKeyboardControl();
  }

  render() {
    const gameState = {
      chosen: this.state.chosen,
      active: this.state.active,
      gameOver: this.state.gameOver,
    };

    let board = null,
      panel = null,
      errorMessage = null;

    if (this.state.loaded && !this.state.apiError) {
      board = (
        <Board
          superheroImageUrls={this.getSuperheroImageUrls()}
          gameState={gameState}
          handleClick={this.handleCardClick}
          replaceBrokenSuperhero={this.replaceBrokenSuperhero}
          handleDragStart={this.handleDragStart}
          handleDragOver={this.handleDragOver}
          handleDrop={this.handleDrop}
        />
      );

      panel = (
        <Panel
          gameState={gameState}
          superheros={this.state.superheros}
          handleButtonClick={this.handleCheckButtonClick}
          replaceBrokenSuperhero={this.replaceBrokenSuperhero}
          initNewGame={this.init}
        />
      );
    }

    if (this.state.apiError) {
      errorMessage = <h3>Произошла ошибка загрузки данных.</h3>;
    }

    return (
      <section>
        <h2>Хорошо ли ты знаешь супергероев?</h2>
        {errorMessage}
        <div id="superhero-game">
          {board}
          {panel}
        </div>
      </section>
    );
  }
}
