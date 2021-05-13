import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ThemeContext from '../../contexts/theme';
import Nav from './Nav';
import Button from '../../components/button/Button';

const HeaderView = (props) => {
  const { t } = useTranslation();
  const { handleButtonClick } = props;
  const logo = 'react.';
  const pageMainHeader = t('header.pageMainHeader');
  const pageSecondaryHeader = t('header.pageSecondaryHeader');
  const buttonCaption = t('header.buttonCaption');
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
