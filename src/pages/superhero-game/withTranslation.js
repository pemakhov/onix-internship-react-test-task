import React, { Component } from 'react';
import getTranslation from './translations';

export default function withTranslation(WrappedComponent) {
  return class extends Component {
    getTexts = (language, componentName) => getTranslation(language, componentName);

    render() {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WrappedComponent getTranslation={this.getTexts} {...this.props} />;
    }
  };
}
