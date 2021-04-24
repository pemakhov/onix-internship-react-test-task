import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeContext';
import Nav from './Nav';
import Button from '../../components/button/Button';

export default function HeaderView(props) {
  const { handleButtonClick } = props;
  const logo = 'react.';
  const pageMainHeader = 'вивчаймо React';
  const pageSecondaryHeader = 'на інтернатурі в ONIX';
  const buttonCaption = 'в дизайні була кнопка';

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <header>
          <div className="container">
            <div id="logo">{logo}</div>
            <Nav />
          </div>
          <div className={`header-content ${theme}`}>
            <h2>{pageMainHeader}</h2>
            <div className="divider" />
            <h3>{pageSecondaryHeader}</h3>
            <Button onClick={handleButtonClick} value={buttonCaption} />
          </div>
        </header>
      )}
    </ThemeContext.Consumer>
  );
}

HeaderView.propTypes = {
  handleButtonClick: PropTypes.func,
};

HeaderView.defaultProps = {
  handleButtonClick: () => {},
};
