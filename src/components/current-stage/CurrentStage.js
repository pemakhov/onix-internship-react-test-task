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

    return (
      <CurrentStageView
        daysTooMeeting={daysToMeeting}
        stages={this.state.stages}
      />
    );
  }
}
