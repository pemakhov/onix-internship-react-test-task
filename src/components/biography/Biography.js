import React, { useState } from "react";
import "./Biography.css";
import { View } from "./biography-view/BiographyView";
import { runSelectionSort } from "../../service/SelectionSort";
import { userInputSchema } from "./Validator";

export const Biography = function () {
  const header = "биография Линуса Торвальдса";
  const initialBio = [
    { year: 1969, episode: "Родился в г. Хельсинки" },
    { year: 1988, episode: "Поступил в Хельсинский университет" },
    { year: 1990, episode: "Купил ПК IBM с процом Intel 80386" },
    { year: 1991, episode: "Выложил в общий доступ первую версию Linux" },
    { year: 1993, episode: "Познакомился с будущей женой Туве" },
    { year: 1996, episode: "Окончил Хельсинский университет" },
    { year: 1997, episode: "Устроился в компанию Transmeta, Сан Хосе" },
    { year: 2003, episode: "Начал работать на OSDL" },
    { year: 2005, episode: "Выпустил первую версию git" },
    {
      year: 2008,
      episode: "Официально представлен музеем истории компьютеров в Калифорнии",
    },
    { year: 2010, episode: "Приз C&C" },
    { year: 2012, episode: 'Премия "Технология тысячелетия" (Финляндия)' },
    { year: 2014, episode: 'Награда "Пионер компьютероной техники"' },
    {
      year: 2018,
      episode: 'Премия "IEEE Masaru Ibuka Consumer Electronics Award"',
    },
  ];

  const [bio, setBio] = useState(initialBio);
  const [ascendYear, setAscendYear] = useState(true);
  const [ascendEpisode, setAscendEpisode] = useState(true);
  const [sortCriteria, setSortCriteria] = useState("");
  const [customSort, setCustomSort] = useState(false);
  const [yearInput, setYearInput] = useState("");
  const [episodeInput, setEpisodeInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const report = (oldBio, newBio) => {
    console.log("Bio before change:");
    console.table(oldBio);

    console.log("Bio after change:");
    console.table(newBio);
  };

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
    const sortedBio = customSort
      ? runSelectionSort(bio, ascendYear, "year")
      : sortBio(bio, ascendYear, "year");

    // log the old and the new bios
    report(bio, sortedBio);

    setBio(sortedBio);
    setAscendYear(!ascendYear);
    setSortCriteria("year");
  };

  const handleEpisodeClick = () => {
    const sortedBio = customSort
      ? runSelectionSort(bio, ascendEpisode, "episode")
      : sortBio(bio, ascendEpisode, "episode");

    // log the old and the new bios
    report(bio, sortedBio);

    setBio(sortedBio);
    setAscendEpisode(!ascendEpisode);
    setSortCriteria("episode");
  };

  const handleCustomSortCheck = (episode) => {
    setCustomSort(episode.target.checked);
  };

  const handleInputChange = (episode) => {
    setErrorMessage("");
    const { name, value } = episode.target;

    if (name === "year") {
      setYearInput(value);
    } else if (name === "episode") {
      setEpisodeInput(value);
    }
  };

  /**
   * Adds a new episode to the end of bio
   * @param {{year: number, episode: string}[]} bio 
   * @param {{year: number, episode: string}} episode 
   * @returns {{year: number, episode: string}[]} bio with a new episode added to the end
   */
  const addEpisodeToBio = (bio, episode) => [...bio, episode];

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { error } = userInputSchema.validate({
      yearInput: +yearInput,
      episodeInput,
    });

    if (error) {
      console.error(error.message);
      setErrorMessage(error.message);
      return;
    }

    const newEpisode = { year: +yearInput, episode: episodeInput };

    const updatedBio = addEpisodeToBio(bio, newEpisode);

    // log the old and the new bios
    report(bio, updatedBio);

    setBio(updatedBio);
    setYearInput("");
    setEpisodeInput("");
    event.target.reset();
  };

  /**
   * Deletes the last episode from bio 
   * @param {{year: number, episode: string}[]} bio 
   * @returns {{year: number, episode: string}[]} the bio with the last episode deleted
   */
  const removeLastEpisodeFromBio = (bio) => bio.slice(0, -1);

  const handleLastEpisodeRemove = () => {
    const updatedBio = removeLastEpisodeFromBio(bio);

    // log the old and the new bios
    report(bio, updatedBio);

    setBio(bio.slice(0, -1));
  };

  return (
    <>
      <View
        header={header}
        bio={bio}
        handleYearClick={handleYearClick}
        handleEpisodeClick={handleEpisodeClick}
        handleCustomSortCheck={handleCustomSortCheck}
        ascendYear={ascendYear}
        ascendEpisode={ascendEpisode}
        sortCriteria={sortCriteria}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        errorMessage={errorMessage}
        handleLastEpisodeRemove={handleLastEpisodeRemove}
      />
    </>
  );
};
