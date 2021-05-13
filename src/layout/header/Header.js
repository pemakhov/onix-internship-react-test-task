import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import HeaderView from './HeaderView';

const Header = (props) => {
  const { t } = useTranslation();
  const { toggleTheme } = props;
  const alertMessage = t('header.alertMessage');
  const handleButtonClick = (message) => {
    // eslint-disable-next-line no-alert
    alert(message);
  };

  return (
    <HeaderView
      handleButtonClick={() => handleButtonClick(alertMessage)}
      toggleTheme={toggleTheme}
    />
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func,
};

Header.defaultProps = {
  toggleTheme: () => {},
};

export default Header;
