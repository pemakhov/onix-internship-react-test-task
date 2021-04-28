import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts';
import { TStage } from './stages';

const HomeView = (props) => {
  const { announce, stages } = props;
  const projectInfoHeader = 'інформація про поточний етап';
  const topicHeader = 'Тема:';
  const taskHeader = 'Завдання:';
  const currentStageNumber = stages.length - 1;
  const currentStage = stages[currentStageNumber];
  const { theme } = useContext(ThemeContext);
  const projectInfoArticleHeader = (
    <>
      {'етап '}
      <strong>
        №
        {currentStageNumber + 1}
      </strong>
    </>
  );

  return (
    <section>
      <h2>{projectInfoHeader}</h2>
      <div className="article">
        <div className={`article__image ${theme}`}>
          <p>{announce}</p>
        </div>
        <div className={`article__content ${theme}`}>
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
};

HomeView.propTypes = {
  announce: PropTypes.string,
  stages: PropTypes.arrayOf(TStage),
};

HomeView.defaultProps = {
  announce: "Can't provide the announce",
  stages: [],
};

export default HomeView;
