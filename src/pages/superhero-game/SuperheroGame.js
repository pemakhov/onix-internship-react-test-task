import React, { useState, useEffect } from 'react';
import withLayout from '../../layout/withLayout';
import CustomMath from '../../service/CustomMath';
import SuperheroGameView from './SuperheroGameView';

const SuperheroGame = () => {
  const [superheros, setSuperheros] = useState([]);
  const [reserve, setReserve] = useState([]);
  const [chosen, setChosen] = useState(null);
  const [active, setActive] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [newGame, setNewGame] = useState(true);

  const startNewGame = () => {
    setSuperheros([]);
    setReserve([]);
    setChosen(null);
    setActive(() => null);
    setGameOver(false);
    setLoaded(false);
    setApiError(null);
    setNewGame(true);
  };

  const URL = 'https://www.superheroapi.com/api.php/10159321593748921/';

  const MIN_ID = 1;

  const MAX_ID = 731;

  const SUPERHEROS_TO_SHOW = 9;

  const RESERVE_OF_SUPERHEROS = 5;

  const getOneSuperhero = async (url) => {
    const response = await fetch(url);
    const superhero = await response.json();
    return superhero;
  };

  const getSuperherosByIdList = async (idList) => {
    const superheroPromises = idList.map((id) => {
      const url = URL + id;
      return getOneSuperhero(url);
    });

    return Promise.all(superheroPromises);
  };

  const handleCardClick = (i) => {
    if (gameOver) return;
    if (active === i) return;

    setActive(() => i);
  };

  const replaceBrokenSuperhero = (n) => {
    if (reserve.length === 0) {
      // eslint-disable-next-line no-alert
      alert('Не вдалося завантажити супергероїв');
      return;
    }

    const updatedSuperheros = [...superheros];
    const updatedReserve = [...reserve];

    updatedSuperheros[n] = updatedReserve.pop();

    setSuperheros(() => updatedSuperheros);
    setReserve(() => updatedReserve);
  };

  const replaceTwoSuperheros = (x, y, heroes) => {
    const updatedSuperheros = [...heroes];
    const superheroX = updatedSuperheros[x];
    updatedSuperheros[x] = updatedSuperheros[y];
    updatedSuperheros[y] = superheroX;

    return updatedSuperheros;
  };

  const updateChosenIndex = (x, y, chosenCard) => {
    if (chosenCard !== x && chosenCard !== y) return chosenCard;

    return chosenCard === x ? y : x;
  };

  const handleDragStart = (event) => {
    if (gameOver) return;

    event.dataTransfer.setData('text/plain', event.target.getAttribute('data-key'));

    // eslint-disable-next-line no-param-reassign
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (event) => {
    if (gameOver) return;

    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (event) => {
    if (gameOver) return;

    event.preventDefault();
    const sourceKey = parseInt(event.dataTransfer.getData('text/plain'));
    const targetKey = parseInt(event.target.getAttribute('data-key'));

    const updatedSuperheros = replaceTwoSuperheros(sourceKey, targetKey, superheros);
    const updatedChosen = updateChosenIndex(sourceKey, targetKey, chosen);

    setSuperheros(() => updatedSuperheros);
    setChosen(() => updatedChosen);
  };

  /**
   * Inits the game
   */
  const init = async () => {
    setNewGame(() => false);

    const idList = CustomMath.getArrayOfRandomNumbersInRange({
      length: SUPERHEROS_TO_SHOW + RESERVE_OF_SUPERHEROS,
      range: {
        min: MIN_ID,
        max: MAX_ID,
      },
    });

    try {
      const heroes = await getSuperherosByIdList(idList);
      const failures = heroes.map((superhero) => superhero?.response === 'error').filter((x) => x);

      if (failures.length > 2) throw new Error('Failed to load too many superheros');

      setSuperheros(() => heroes.slice(0, SUPERHEROS_TO_SHOW));
      setReserve(() => heroes.slice(SUPERHEROS_TO_SHOW));
      setChosen(() => CustomMath.getRandomNumberInRange(0, SUPERHEROS_TO_SHOW - 1));
      setLoaded(true);
    } catch (error) {
      setApiError(() => error);
    }
  };

  const handleKeyDown = (event) => {
    const arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

    if (!arrowKeys.includes(event.key)) return;

    event.preventDefault();

    if (gameOver) return;

    if (active === null) {
      setActive(0);
      return;
    }

    let next = 0;
    switch (event.key) {
      case 'ArrowLeft':
        next = ((active + 3 - 1) % 3) + Math.floor(active / 3) * 3;
        break;

      case 'ArrowRight':
        next = ((active + 3 + 1) % 3) + Math.floor(active / 3) * 3;
        break;

      case 'ArrowUp':
        next = (active + SUPERHEROS_TO_SHOW - 3) % SUPERHEROS_TO_SHOW;
        break;

      case 'ArrowDown':
        next = (active + 3) % SUPERHEROS_TO_SHOW;
        break;

      default:
        // eslint-disable-next-line no-console
        console.log('something went wrong');
    }
    setActive(next);
  };

  const handleCheckButtonClick = () => {
    setGameOver(true);
  };

  useEffect(() => {
    if (!newGame) return;
    init();
  }, [newGame]);

  useEffect(() => {
    if (gameOver) return {};
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [gameOver, active]);

  return (
    <SuperheroGameView
      superheros={superheros}
      gameState={{
        chosen,
        active,
        gameOver,
        loaded,
        apiError,
      }}
      handlers={{
        handleCardClick,
        replaceBrokenSuperhero,
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleCheckButtonClick,
        startNewGame,
      }}
    />
  );
};

export default withLayout(SuperheroGame);
