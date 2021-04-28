import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../contexts';

import Button from '../../../components/button/Button';
import withTranslation from '../withTranslation';

const ControlArea = (props) => {
  const { theme } = useContext(ThemeContext);
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

  return <div className={`control-area ${theme}`}>{content}</div>;
};

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
