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

    setBio(sortedBio);
    setAscendYear(!ascendYear);
    setSortCriteria("year");
    console.table(bio);
  };

  const handleEpisodeClick = () => {
    const sortedBio = customSort
      ? runSelectionSort(bio, ascendEpisode, "episode")
      : sortBio(bio, ascendEpisode, "episode");

    setBio(sortedBio);
    setAscendEpisode(!ascendEpisode);
    setSortCriteria("episode");
    console.table(bio);
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

    setBio([...bio, { year: +yearInput, episode: episodeInput }]);
    setYearInput("");
    setEpisodeInput("");
    event.target.reset();
  };

  const handleLastEpisodeRemove = () => {
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
