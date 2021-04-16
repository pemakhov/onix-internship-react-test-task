import React, { Component } from "react";
import getTranslation from "./translations";

export default function withTranslation(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        translation: this.getTexts(),
      };
    }

    getTexts = (language, componentName) => getTranslation(language, componentName);

    render() {
      return (
        <WrappedComponent
          getTranslation={this.getTexts}
          {...this.props}
        />
      );
    }
  };
}
