import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Header from './header/Header';
import Footer from './footer/Footer';

const withLayout = (WrappedComponent) => {
  return () => (
    <ThemeContext.Consumer>
      {(context) => (
        <div id="canvas" className={context.theme}>
          <div className={`container ${context.theme}`}>
            <Header />
            <main className={context.theme}>
              <WrappedComponent />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default withLayout;
