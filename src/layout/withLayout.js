import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

const withLayout = (WrappedComponent) => {
  return () => {
    return (
      <>
        <Header />
        <main>
          <WrappedComponent />
        </main>
        <Footer />
      </>
    );
  };
};

export default withLayout;
