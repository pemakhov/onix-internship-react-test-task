import React from 'react';
import getTranslation from './translations';

const withTranslation = (WrappedComponent) => {
  return (props) => {
    const getTexts = (language, componentName) => getTranslation(language, componentName);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent getTranslation={getTexts} {...props} />;
  };
};

export default withTranslation;
