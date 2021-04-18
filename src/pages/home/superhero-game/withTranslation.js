import React, { Component } from 'react';
import getTranslation from './translations';

export default function withTranslation(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        // eslint-disable-next-line react/no-unused-state
        translation: this.getTexts(),
      };
    }

    getTexts = (language, componentName) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      getTranslation(language, componentName);

    render() {
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <WrappedComponent getTranslation={this.getTexts} {...this.props} />
      );
    }
  };
}
