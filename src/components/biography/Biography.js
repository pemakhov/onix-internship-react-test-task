import React, { useState } from "react";
import "./Biography.css";
import { View } from "./view/View";
import { runSelectionSort } from "../../service/SelectionSort";
import { userInputSchema } from "./Validator";

export const Biography = function () {
  const header = "биография Линуса Торвальдса";
  const initialBio = [
    [1969, "Родился в г. Хельсинки"],
    [1988, "Поступил в Хельсинский университет"],
    [1990, "Купил ПК IBM с процом Intel 80386"],
    [1991, "Выложил в общий доступ первую версию Linux"],
    [1993, "Познакомился с будущей женой Туве"],
    [1996, "Окончил Хельсинский университет"],
    [1997, "Устроился в компанию Transmeta, Сан Хосе"],
    [2003, "Начал работать на OSDL"],
    [2005, "Выпустил первую версию git"],
    [2008, "Официально представлен музеем истории компьютеров в Калифорнии"],
    [2010, "Приз C&C"],
    [2012, 'Премия "Технология тысячелетия" (Финляндия)'],
    [2014, 'Награда "Пионер компьютероной техники"'],
    [2018, 'Премия "IEEE Masaru Ibuka Consumer Electronics Award"'],
  ];

  const [bio, setBio] = useState(initialBio);
  const [ascendYear, setAscendYear] = useState(true);
  const [ascendEvent, setAscendEvent] = useState(true);
  const [sortCriteria, setSortCriteria] = useState("");
  const [customSort, setCustomSort] = useState(false);
  const [yearInput, setYearInput] = useState("");
  const [eventInput, setEventInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sortBio = (data, ascend, column) => {
    const sortFunction = ascend
      ? (a, b) => (a[column] >= b[column] ? -1 : 1)
      : (a, b) => (a[column] >= b[column] ? 1 : -1);
    return [...data].sort(sortFunction);
  };

  const handleYearClick = () => {
    const sortedBio = customSort
      ? runSelectionSort(bio, ascendYear, 0)
      : sortBio(bio, ascendYear, 0);

    setBio(sortedBio);
    setAscendYear(!ascendYear);
    setSortCriteria("year");
    console.table(bio);
  };

  const handleEventClick = () => {
    const sortedBio = customSort
      ? runSelectionSort(bio, ascendEvent, 1)
      : sortBio(bio, ascendEvent, 1);

    setBio(sortedBio);
    setAscendEvent(!ascendEvent);
    setSortCriteria("event");
    console.table(bio);
  };

  const handleCustomSortCheck = (event) => {
    setCustomSort(event.target.checked);
  };

  const handleInputChange = (event) => {
    setErrorMessage("");
    const { name, value } = event.target;

    if (name === "year") {
      setYearInput(value);
    } else if (name === "biography-event") {
      setEventInput(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log({ yearInput, eventInput });

    const { error } = userInputSchema.validate({
      yearInput: +yearInput,
      eventInput,
    });

    if (error) {
      console.error(error.message);
      setErrorMessage(error.message);
      return;
    }

    setBio([...bio, [+yearInput, eventInput]]);
    setYearInput("");
    setEventInput("");
    event.target.reset();
  };

  const handleLastEventRemove = () => {
    setBio(bio.slice(0, -1));
  };

  return (
    <>
      <View
        header={header}
        bio={bio}
        handleYearClick={handleYearClick}
        handleEventClick={handleEventClick}
        handleCustomSortCheck={handleCustomSortCheck}
        ascendYear={ascendYear}
        ascendEvent={ascendEvent}
        sortCriteria={sortCriteria}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        errorMessage={errorMessage}
        handleLastEventRemove={handleLastEventRemove}
      />
    </>
  );
};
