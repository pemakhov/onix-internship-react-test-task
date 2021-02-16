import React, { useState } from "react";
import "./Biography.css";
import { BiographyTable } from "../biography-table/BiographyTable";

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

  const getSortedBioByYear = (data, ascend) => {
    const sortFunction = ascend ? (a, b) => b[0] - a[0] : (a, b) => a[0] - b[0];
    return [...data].sort(sortFunction);
  };

  const getSortedBioByEvent = (data, ascend) => {
    const sortFunction = ascend
      ? (a, b) => (a[1] >= b[1] ? -1 : 1)
      : (a, b) => (a[1] >= b[1] ? 1 : -1);
    return [...data].sort(sortFunction);
  };

  const handleYearClick = () => {
    setBio(getSortedBioByYear(bio, ascendYear));
    setAscendYear(!ascendYear);
    setSortCriteria("year");
  };

  const handleEventClick = () => {
    setBio(getSortedBioByEvent(bio, ascendEvent));
    setAscendEvent(!ascendEvent);
    setSortCriteria("event");
  };

  return (
    <>
      <BiographyTable
        header={header}
        bio={bio}
        handleYearClick={handleYearClick}
        handleEventClick={handleEventClick}
        ascendYear={ascendYear}
        ascendEvent={ascendEvent}
        sortCriteria={sortCriteria}
      />
    </>
  );
};
