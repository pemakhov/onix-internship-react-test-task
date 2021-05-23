import React from 'react';
import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';

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
