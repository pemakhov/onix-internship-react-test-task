import React from "react";
import { HeaderView } from "./HeaderView";

export function Header() {
  const alertMessage = "Так, простий альорт. Кращого для цієї кнопки не придумав."; 
  const handleButtonClick = (message) => {
    alert(message);
  };

  return <HeaderView handleButtonClick={() => handleButtonClick(alertMessage)} />;
}
