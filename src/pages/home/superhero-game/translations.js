import PropTypes from 'prop-types';

const ua = {
  InfoArea: {
    task: 'Хто тут',
    successReport: 'Що ж, цього разу вірно.',
    failedReport: 'Та ну ні!',
  },
  ControlArea: {
    task:
      'Обери фото супергероя мишкою або стрілочками та натисни кнопку "Перевірити" або Enter',
    newGameButtonText: 'Нова гра',
    checkButtonText: 'Перевірити',
  },
  SuperheroGameView: {
    downloadError: 'Помилка завантаження даних',
    gameHeader: 'Чи ти добре знаєш супергероїв?',
  },
};

const en = {
  InfoArea: {
    task: 'Who is',
    successReport: 'This time you were right!',
    failedReport: 'No way!',
  },
  ControlArea: {
    task:
      'Please, choose a superhero with the mouse or arrow keys, and press "Check" button, or Enter',
    newGameButtonText: 'New Game',
    checkButtonText: 'Check',
  },
  SuperheroGameView: {
    downloadError: 'Download Error',
    gameHeader: 'Do you know superheros well?',
  },
};

const getTranslation = (language, componentName) => {
  switch (language) {
    case 'ua':
      return ua[componentName];
    case 'en':
      return en[componentName];
    default:
      return {};
  }
};

export default getTranslation;

export const TTranslation = PropTypes.shape({
  InfoArea: PropTypes.shape({
    task: PropTypes.string,
    successReport: PropTypes.string,
    failedReport: PropTypes.string,
  }),
  ControlArea: {
    task: PropTypes.string,
    newGameButtonText: PropTypes.string,
    checkButtonText: PropTypes.string,
  },
  SuperheroGameView: {
    downloadError: PropTypes.string,
    gameHeader: PropTypes.string,
  },
});
