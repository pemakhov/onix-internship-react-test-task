import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../contexts/theme';

const HomeView = (props) => {
  const [t] = useTranslation();
  const { daysToMeeting } = props;
  const daysToMeetingLabel = t('home.daysToMeetingLabel');
  const projectInfoHeader = t('home.projectInfoHeader');
  const topicHeader = t('home.topicHeader');
  const taskHeader = t('home.taskHeader');
  const stageNumberLabel = t('home.stageNumberLabel');
  const currentStageNumber = t('home.currentStage.stageNumber');
  const topic = t('home.currentStage.topic');
  const task = t('home.currentStage.task');
  const { theme } = useContext(ThemeContext);
  const projectInfoArticleHeader = (
    <>
      {stageNumberLabel}
      <strong>
        {currentStageNumber}
      </strong>
    </>
  );

  return (
    <section>
      <h2>{projectInfoHeader}</h2>
      <div className="article">
        <div className={`article__image ${theme}`}>
          <p>
            {daysToMeetingLabel}
            {daysToMeeting}
          </p>
        </div>
        <div className={`article__content ${theme}`}>
          <h3>{projectInfoArticleHeader}</h3>
          <div className="divider" />
          <h4>{topicHeader}</h4>
          <p>{topic}</p>
          <h4>{taskHeader}</h4>
          {task}
        </div>
      </div>
    </section>
  );
};

HomeView.propTypes = {
  daysToMeeting: PropTypes.number,
};

HomeView.defaultProps = {
  daysToMeeting: 0,
};

export default HomeView;
