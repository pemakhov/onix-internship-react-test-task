import React from "react";

export class CurrentStage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stages: [
        {
          topic: "тестовое задание",
          goal:
            "продемонстрировать знания и умения, необходимые для интернатуры",
          task: (
            <>
              <p>Выбрать шаблон и сверстать веб-страницу.</p>
              <p>
                Наполнить страницу содержимым: описанием базовых понятий, знания
                которых необходимы для прохождения интернатуры.
              </p>
            </>
          ),
        },
        {
          topic: "основы создания проектов на react",
          goal:
            "ознакомится с node и npm, получить базовые понятия о том что такое react," +
            " развернуть первый проект с помощью react cli",
          task: (
            <>
              <p>1. Установить node.js и npm</p>
              <p>2. Создать новый проект с помощью утилиты create react app</p>
              <p>3. Перенести сверстанную страницу в react компоненту</p>
            </>
          ),
        },
        {
          topic: "основы js, переменные, операторы, условия",
          goal: "ознакомится с понятием переменной",
          task: (
            <p>
              Выделить потенциально динамический контент на странице (имена,
              даты, тексты) и перенести его в переменные. Переменные должны быть
              константами в компоненте или в state.
            </p>
          ),
        },
        {
          topic: "основы js, массивы",
          goal: "научиться работать с массивами",
          task: (
            <>
              <p>
                На странице создать таблицу с биографией по годам. Данные
                записать в массив. Сделать сортировку данных по клику (без
                помощи и с помощью функций сортировки). Добавить две кнопки, по
                клику на первую добавить новый элемент массива, и удалить его по
                клику на вторую. Результаты выводить в консоль с помощью
                console.log.
              </p>
            </>
          ),
        },
        {
          topic: "основы js, объекты",
          goal: "научиться работать с объектами",
          task: (
            <>
              <p>
                усложнить таблицу из прошлого урока, сделать минимум два уровня
                вложенности. Добавить и убрать элемент из объекта, выбрать
                элемент объекта по ключу. Переписать часть объекта с помощью
                spread оператора
              </p>
            </>
          ),
        },
        {
          topic: "основы js, область видимости",
          goal: "ознакомиться с понятием области видимости",
          task: (
            <>
              <p>
                переписать функции сортировки, добавления и удаления записей
                биографии из прошлого задания таким образом чтобы все
                необходимое приходило в качестве параметров (без использования
                внешних переменных), а функция возвращала новый объект (а не
                перезаписывала старый). После вызова функции вывести в консоль
                старый и новый обьекты
              </p>
            </>
          ),
        },
      ],
      meetingDayNumber: 6,
      currentStageNumber: 5,
    };
  }

  render() {
    const projectInfoHeader = "информация о текущем этапе";
    const currentDay = new Date().getDay();
    const daysToMeeting = this.state.meetingDayNumber - currentDay;

    let daysWordWithProperEnding =
      daysToMeeting > 4 ? "дней" : daysToMeeting > 1 ? "дня" : "день";

    let projectInfoQuote = `До встречи ${daysToMeeting} ${daysWordWithProperEnding}`;

    const meetingToday = daysToMeeting === 0;

    if (meetingToday) {
      projectInfoQuote = "Встреча сегодня";
    }

    const currentStage = this.state.stages[this.state.currentStageNumber];

    const projectInfoArticleHeader = (
      <>
        этап <strong>№{this.state.currentStageNumber}</strong>
      </>
    );

    return (
      <section>
        <h2>{projectInfoHeader}</h2>
        <div className="article">
          <div className="article__image">
            <p>{projectInfoQuote}</p>
          </div>
          <div className="article__content">
            <h3>{projectInfoArticleHeader}</h3>
            <div className="divider"></div>
            <h4>Тема:</h4>
            <p>{currentStage.topic}</p>
            <h4>Задание:</h4>
            {currentStage.task}
          </div>
        </div>
      </section>
    );
  }
}
