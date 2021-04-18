/* eslint-disable operator-linebreak */
import React from 'react';
import HeaderView from './HeaderView';

export default function Header() {
  const alertMessage =
    'Так, простий альорт. Кращого для цієї кнопки не придумав.';
  const handleButtonClick = (message) => {
    // eslint-disable-next-line no-alert
    alert(message);
  };

  return (
    <HeaderView handleButtonClick={() => handleButtonClick(alertMessage)} />
  );
}
