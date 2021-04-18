/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

export default function CurrentStageView(props) {
  const { announce, stages } = props;
  const projectInfoHeader = 'інформація про поточний етап';
  const topicHeader = 'Тема:';
  const taskHeader = 'Завдання:';
  const currentStageNumber = stages.length - 1;
  const currentStage = stages[currentStageNumber];
  const projectInfoArticleHeader = (
    <>
      етап <strong>№{currentStageNumber}</strong>
    </>
  );

  return (
    <section>
      <h2>{projectInfoHeader}</h2>
      <div className="article">
        <div className="article__image">
          <p>{announce}</p>
        </div>
        <div className="article__content">
          <h3>{projectInfoArticleHeader}</h3>
          <div className="divider" />
          <h4>{topicHeader}</h4>
          <p>{currentStage.topic}</p>
          <h4>{taskHeader}</h4>
          {currentStage.task}
        </div>
      </div>
    </section>
  );
}

CurrentStageView.propTypes = {
  announce: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  stages: PropTypes.any,
};

CurrentStageView.defaultProps = {
  announce: 'Can\'t provide the announce',
  stages: {},
};
