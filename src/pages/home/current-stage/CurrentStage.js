import React from 'react';
import Stages from './stages';
import CurrentStageView from './CurrentStageView';

export default class CurrentStage extends React.Component {
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
