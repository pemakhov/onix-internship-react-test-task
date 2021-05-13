import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const InfoArea = (props) => {
  const [t] = useTranslation();
  const {
    active,
    chosen,
    gameOver,
    chosenSuperhero,
  } = props;

  const task = t('superheroGame.InfoArea.task');
  const successReport = t('superheroGame.InfoArea.successReport');
  const failedReport = t('superheroGame.InfoArea.failedReport');

  const getInfo = (activeProp, chosenProp, gameOverProp) => {
    if (!gameOverProp) {
      return (
        <>
          {task}
          <strong>
            {chosenSuperhero?.name}
            ?
          </strong>
        </>
      );
    }

    if (activeProp === chosenProp) {
      return <strong>{successReport}</strong>;
    }

    return <strong>{failedReport}</strong>;
  };

  const content = getInfo(active, chosen, gameOver);

  return <h3 className="task">{content}</h3>;
};

InfoArea.propTypes = {
  active: PropTypes.number,
  chosen: PropTypes.number,
  gameOver: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  chosenSuperhero: PropTypes.any,
};

InfoArea.defaultProps = {
  active: 0,
  chosen: 0,
  gameOver: false,
  chosenSuperhero: {},
};

export default InfoArea;
