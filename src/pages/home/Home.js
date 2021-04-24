import React from 'react';
import withLayout from '../../layout/withLayout';
import Stages from './stages';
import CurrentStageView from './HomeView';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stages: Stages,
      meetingDayNumber: 6,
    };
  }

  getDaysWord = (dayNumber) => {
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

  render() {
    const { meetingDayNumber, stages } = this.state;
    const daysToMeeting = meetingDayNumber - new Date().getDay();
    const daysWordWithProperEnding = this.getDaysWord(daysToMeeting);

    const announce = daysToMeeting === 0
      ? 'Зустріч сьогодні'
      : `До зустрічі ${daysToMeeting} ${daysWordWithProperEnding}`;

    return <CurrentStageView announce={announce} stages={stages} />;
  }
}

export default withLayout(Home);
