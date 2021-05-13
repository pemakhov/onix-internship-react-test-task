import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ThemeContext from '../../../contexts/theme';

import Button from '../../../components/button/Button';

const ControlArea = (props) => {
  const { theme } = useContext(ThemeContext);
  const [t] = useTranslation();

  const {
    active,
    gameOver,
    startNewGame,
    handleButtonClick,
  } = props;

  const task = t('superheroGame.ControlArea.task');
  const newGameButtonText = t('superheroGame.ControlArea.newGameButtonText');
  const checkButtonText = t('superheroGame.ControlArea.checkButtonText');

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
  active: PropTypes.number,
  gameOver: PropTypes.bool,
  startNewGame: PropTypes.func,
  handleButtonClick: PropTypes.func,
};

ControlArea.defaultProps = {
  active: 0,
  gameOver: false,
  startNewGame: () => {},
  handleButtonClick: () => {},
};

export default ControlArea;
