import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts';
import Nav from './Nav';
import Button from '../../components/button/Button';

const HeaderView = (props) => {
  const { handleButtonClick } = props;
  const logo = 'react.';
  const pageMainHeader = 'вивчаймо React';
  const pageSecondaryHeader = 'на інтернатурі в ONIX';
  const buttonCaption = 'в дизайні була кнопка';
  const { theme } = useContext(ThemeContext);

  return (
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
  );
};

HeaderView.propTypes = {
  handleButtonClick: PropTypes.func,
};

HeaderView.defaultProps = {
  handleButtonClick: () => {},
};

export default HeaderView;
