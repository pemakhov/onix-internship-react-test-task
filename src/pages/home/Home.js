import React from 'react';
import withLayout from '../../layout/withLayout';
import stages from './stages';
import CurrentStageView from './HomeView';

const Home = () => {
  const MEETING_DAY = 6;

  const getDaysWord = (dayNumber) => {
    switch (true) {
      case dayNumber > 4:
        return 'днів';
      case dayNumber > 1:
        return 'дні';
      case dayNumber === 1:
        return 'день';
      default:
        return 'днів';
    }
  };

  const daysToMeeting = MEETING_DAY - new Date().getDay();
  const daysWordWithProperEnding = getDaysWord(daysToMeeting);

  const announce = daysToMeeting === 0
    ? 'Зустріч сьогодні'
    : `До зустрічі ${daysToMeeting} ${daysWordWithProperEnding}`;

  return <CurrentStageView announce={announce} stages={stages} />;
};

export default withLayout(Home);
