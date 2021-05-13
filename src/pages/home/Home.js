import React from 'react';
import withLayout from '../../layout/withLayout';
import CurrentStageView from './HomeView';

const Home = () => {
  const MEETING_DAY = 6;

  const daysToMeeting = MEETING_DAY - new Date().getDay();

  return <CurrentStageView daysToMeeting={daysToMeeting} />;
};

export default withLayout(Home);
