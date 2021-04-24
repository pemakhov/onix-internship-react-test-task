import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../contexts/ThemeContext';

import Button from '../../../components/button/Button';
import withTranslation from '../withTranslation';

function ControlArea(props) {
  const {
    language,
    active,
    gameOver,
    getTranslation,
    startNewGame,
    handleButtonClick,
  } = props;

  const {
    task = '',
    newGameButtonText = '',
    checkButtonText = '',
  } = getTranslation(language, 'ControlArea');

  const getContent = (activeProp, gameOverProp) => {
    if (gameOverProp) {
      return <Button onClick={startNewGame} value={newGameButtonText} />;
    }

    if (activeProp !== null) {
      return <Button onClick={handleButtonClick} value={checkButtonText} />;
    }

    return <>{task}</>;
  };

  const content = getContent(active, gameOver);

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div className={`control-area ${context.theme}`}>{content}</div>
      )}
    </ThemeContext.Consumer>
  );
}

ControlArea.propTypes = {
  language: PropTypes.string,
  active: PropTypes.number,
  gameOver: PropTypes.bool,
  getTranslation: PropTypes.func,
  startNewGame: PropTypes.func,
  handleButtonClick: PropTypes.func,
};

ControlArea.defaultProps = {
  language: '',
  active: 0,
  gameOver: false,
  getTranslation: () => {},
  startNewGame: () => {},
  handleButtonClick: () => {},
};

export default withTranslation(ControlArea);
