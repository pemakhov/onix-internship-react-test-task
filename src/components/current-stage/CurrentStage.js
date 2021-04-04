import React from "react";
import { stages } from "./Stages";
import { CurrentStageView } from "./CurrentStageView";

export class CurrentStage extends React.Component {
  state = {
    stages: stages,
    meetingDayNumber: 6,
  };

  render() {
    const daysToMeeting = this.state.meetingDayNumber - new Date().getDay();
    const daysWordWithProperEnding =
      daysToMeeting > 4 ? "днів" : daysToMeeting > 1 ? "дні" : "день";

    const announce =
      daysToMeeting === 0
        ? "Зустріч сьогодні"
        : `До зустрічі ${daysToMeeting} ${daysWordWithProperEnding}`;

    return (
      <CurrentStageView
        announce={announce}
        stages={this.state.stages}
      />
    );
  }
}
