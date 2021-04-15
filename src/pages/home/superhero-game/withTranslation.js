import React, { Component } from "react";

export default function withTranslation(WrappedComponent, getTexts) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        translation: getTexts(),
      };
    }

    render() {
      return (
        <WrappedComponent
          translation={this.state.translation}
          {...this.props}
        />
      );
    }
  };
}
