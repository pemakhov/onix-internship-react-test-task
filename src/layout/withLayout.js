import React, { useContext } from 'react';
import { ThemeContext } from '../contexts';
import Header from './header/Header';
import Footer from './footer/Footer';

const withLayout = (WrappedComponent) => {
  return () => {
    const { theme } = useContext(ThemeContext);

    return (
      <div id="canvas" className={theme}>
        <div className={`container ${theme}`}>
          <Header />
          <main className={theme}>
            <WrappedComponent />
          </main>
          <Footer />
        </div>
      </div>
    );
  };
};

export default withLayout;
