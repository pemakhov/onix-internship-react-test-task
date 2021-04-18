import React, { Component } from 'react';
import CustomMath from '../../../service/CustomMath';
import SuperheroGameViewWithTranslation from './SuperheroGameView';

export default class SuperheroGame extends Component {
  initialState = {
    superheros: [],
    reserve: [],
    chosen: null,
    active: null,
    gameOver: false,
    loaded: false,
    apiError: null,
    language: 'ua', // "ua" or "en"
  };

  URL = 'https://www.superheroapi.com/api.php/10159321593748921/';

  MIN_ID = 1;

  MAX_ID = 731;

  SUPERHEROS_TO_SHOW = 9;

  RESERVE_OF_SUPERHEROS = 5;

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  componentDidMount() {
    this.init();
    this.addKeyboardControl();
  }

  componentDidUpdate(prevProps, prevState) {
    const { gameOver } = this.state;

    if (!(prevState.gameOver && !gameOver)) {
      return;
    }

    // TODO: Solve this issue
    // eslint-disable-next-line react/no-did-update-set-state
    this.setState(this.initialState);
    this.init();
  }

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

    return Promise.all(superheroPromises);
  }

  handleCardClick = (i) => {
    const { gameOver, active } = this.state;

    if (gameOver) {
      return;
    }
    if (active === i) {
      return;
    }
    this.setState({ active: i });
  };

  handleCheckButtonClick = () => {
    this.setState({ gameOver: true });
  };

  toggleLanguage = () => {
    this.setState((prevState) => {
      const newLanguage = prevState.language === 'ua' ? 'en' : 'ua';
      return { language: newLanguage };
    });
  };

  replaceBrokenSuperhero = (n) => {
    const { superheros, reserve } = this.state;

    // eslint-disable-next-line no-alert
    alert(
      'Де-які дані супергероя не завантажились і супергерой буде замінений'
    );

    if (reserve.length === 0) {
      return;
    }

    const updatedSuperheros = [...superheros];
    const updatedReserve = [...reserve];

    updatedSuperheros[n] = updatedReserve.pop();

    this.setState({ superheros: updatedSuperheros, reserve: updatedReserve });
  };

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
    const { gameOver } = this.state;

    if (gameOver) {
      return;
    }

    event.dataTransfer.setData(
      'text/plain',
      event.target.getAttribute('data-key')
    );

    // eslint-disable-next-line no-param-reassign
    event.dataTransfer.effectAllowed = 'move';
  };

  handleDragOver = (event) => {
    const { gameOver } = this.state;
    if (gameOver) {
      return;
    }

    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.dataTransfer.dropEffect = 'move';
  };

  handleDrop = (event) => {
    const { gameOver, superheros, chosen } = this.state;
    if (gameOver) {
      return;
    }

    event.preventDefault();
    const sourceKey = parseInt(event.dataTransfer.getData('text/plain'));
    const targetKey = parseInt(event.target.getAttribute('data-key'));

    const updatedSuperheros = this.replaceTwoSuperheros(
      sourceKey,
      targetKey,
      superheros
    );

    const updatedChosen = this.updateChosenIndex(sourceKey, targetKey, chosen);

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
        .map((superhero) => superhero?.response === 'error')
        .filter((x) => x);

      if (failures.length > 2) {
        throw new Error('Failed to load too many superheros');
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

  addKeyboardControl() {
    const { gameOver, active } = this.state;
    const handleKeyDown = (event) => {
      const arrowKeys = [
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
        'Enter',
      ];

      if (!arrowKeys.includes(event.key)) {
        return;
      }

      event.preventDefault();

      if (gameOver) {
        return;
      }

      if (active === null) {
        this.setState({ active: 0 });
        return;
      }

      let nextActive = 0;

      switch (event.key) {
        case 'Enter':
          if (active !== null && !gameOver) {
            this.setState({ gameOver: true });
            return;
          }
          break;

        case 'ArrowLeft':
          nextActive = ((active + 3 - 1) % 3) + Math.floor(active / 3) * 3;
          break;

        case 'ArrowRight':
          nextActive = ((active + 3 + 1) % 3) + Math.floor(active / 3) * 3;
          break;

        case 'ArrowUp':
          // eslint-disable-next-line operator-linebreak
          nextActive =
            (active + this.SUPERHEROS_TO_SHOW - 3) % this.SUPERHEROS_TO_SHOW;
          break;

        case 'ArrowDown':
          nextActive = (active + 3) % this.SUPERHEROS_TO_SHOW;
          break;

        default:
          // eslint-disable-next-line no-console
          console.log('something went wrong');
      }

      this.setState({ active: nextActive });
    };

    window.removeEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleKeyDown);
  }

  render() {
    const {
      language,
      superheros,
      chosen,
      active,
      gameOver,
      loaded,
      apiError,
    } = this.state;

    return (
      <SuperheroGameViewWithTranslation
        language={language}
        superheros={superheros}
        gameState={{
          chosen,
          active,
          gameOver,
          loaded,
          apiError,
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
