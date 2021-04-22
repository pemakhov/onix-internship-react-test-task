import React from 'react';
import PropTypes from 'prop-types';
import HeaderView from './HeaderView';

export default function Header(props) {
  const { toggleTheme } = props;
  const alertMessage = 'Так, простий альорт. '
    + 'Кращого для цієї кнопки не придумав.';
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
}

Header.propTypes = {
  toggleTheme: PropTypes.func,
};

Header.defaultProps = {
  toggleTheme: () => {},
};
