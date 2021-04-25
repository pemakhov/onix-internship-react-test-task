import React, { useState } from 'react';
import withLayout from '../../layout/withLayout';
import BiographyView from './BiographyView';
import runSelectionSort from '../../service/SelectionSort';
import userInputSchema from './validation';
import initialBio from './dataOfBio';
import './Biography.scss';

const Biography = () => {
  const header = 'біографія Лінуса Торвальдса';

  const [bio, setBio] = useState(initialBio);
  const [ascendYear, setAscendYear] = useState(true);
  const [ascendEpisode, setAscendEpisode] = useState(true);
  const [sortCriteria, setSortCriteria] = useState('');
  const [customSort, setCustomSort] = useState(false);
  const [yearInput, setYearInput] = useState('');
  const [episodeInput, setEpisodeInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * Sorts data
   * @param {{year: number, episode: string}[]} data
   * @param {boolean} ascend
   * @param {string} property
   * @returns {{year: number, episode: string}[]} sorted data
   */
  const sortBio = (data, ascend, property) => {
    const sortFunction = ascend
      ? (a, b) => (a[property] >= b[property] ? -1 : 1)
      : (a, b) => (a[property] >= b[property] ? 1 : -1);
    return [...data].sort(sortFunction);
  };

  const handleYearClick = () => {
    const sortedBio = customSort ? runSelectionSort(bio, ascendYear, 'year') : sortBio(bio, ascendYear, 'year');

    setBio(sortedBio);
    setAscendYear(!ascendYear);
    setSortCriteria('year');
  };

  const handleEpisodeClick = () => {
    const sortedBio = customSort
      ? runSelectionSort(bio, ascendEpisode, 'episode')
      : sortBio(bio, ascendEpisode, 'episode');

    setBio(sortedBio);
    setAscendEpisode(!ascendEpisode);
    setSortCriteria('episode');
  };

  const handleCustomSortCheck = (episode) => {
    setCustomSort(episode.target.checked);
  };

  const handleInputChange = (episode) => {
    setErrorMessage('');
    const { name, value } = episode.target;

    if (name === 'year') {
      setYearInput(value);
    } else if (name === 'episode') {
      setEpisodeInput(value);
    }
  };

  /**
   * Adds a new episode to the end of bio
   * @param {{year: number, episode: string}[]} oldBio
   * @param {{year: number, episode: string}} episode
   * @returns {{year: number, episode: string}[]} bio with a new episode added to the end
   */
  const addEpisodeToBio = (oldBio, episode) => [...oldBio, episode];

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { error } = userInputSchema.validate({
      yearInput: +yearInput,
      episodeInput,
    });

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    const newEpisode = { year: +yearInput, episode: episodeInput };

    const updatedBio = addEpisodeToBio(bio, newEpisode);

    setBio(updatedBio);
    setYearInput('');
    setEpisodeInput('');
    event.target.reset();
  };

  /**
   * Deletes the last episode from bio
   * @param {{year: number, episode: string}[]} oldBio
   * @returns {{year: number, episode: string}[]} the bio with the last episode deleted
   */
  const removeLastEpisodeFromBio = (oldBio) => oldBio.slice(0, -1);

  const handleLastEpisodeRemove = () => {
    removeLastEpisodeFromBio(bio);

    setBio(bio.slice(0, -1));
  };

  const data = {
    bio,
    header,
    ascendYear,
    ascendEpisode,
    sortCriteria,
    errorMessage,
  };

  const handlers = {
    handleYearClick,
    handleEpisodeClick,
    handleCustomSortCheck,
    handleInputChange,
    handleFormSubmit,
    handleLastEpisodeRemove,
  };

  return (
    <>
      <BiographyView
        data={data}
        handlers={handlers}
      />
    </>
  );
};

export default withLayout(Biography);
