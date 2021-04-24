import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeContext';
import { TStage } from './stages';

export default function HomeView(props) {
  const { announce, stages } = props;
  const projectInfoHeader = 'інформація про поточний етап';
  const topicHeader = 'Тема:';
  const taskHeader = 'Завдання:';
  const currentStageNumber = stages.length - 1;
  const currentStage = stages[currentStageNumber];
  const projectInfoArticleHeader = (
    <>
      {'етап '}
      <strong>
        № 
        {currentStageNumber}
      </strong>
    </>
  );

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <section>
          <h2>{projectInfoHeader}</h2>
          <div className="article">
            <div className={`article__image ${context.theme}`}>
              <p>{announce}</p>
            </div>
            <div className={`article__content ${context.theme}`}>
              <h3>{projectInfoArticleHeader}</h3>
              <div className="divider" />
              <h4>{topicHeader}</h4>
              <p>{currentStage.topic}</p>
              <h4>{taskHeader}</h4>
              {currentStage.task}
            </div>
          </div>
        </section>
      )}
    </ThemeContext.Consumer>
  );
}

HomeView.propTypes = {
  announce: PropTypes.string,
  stages: PropTypes.arrayOf(TStage),
};

HomeView.defaultProps = {
  announce: "Can't provide the announce",
  stages: [],
};
