import "./SummaryView.css";
import React, { Component } from "react";

export class SummaryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summaryHeader: "коротко о Линусе Торвальдсе",
      summaryQuote: "Человек, создавший ядро Linux",
      summaryArticleHeader: (
        <h3>
          резюме <strong>Линуса Торвальдса</strong>
        </h3>
      ),
    };
  }

  render() {
    const items = [];

    for (const itemName in this.props.data) {
      items.push(
        <li key={itemName}>
          <strong>{this.props.data[itemName].title}:</strong>{" "}
          {this.props.data[itemName].value}
        </li>
      );
    }

    return (
      <section id="summary">
        <h2>{this.state.summaryHeader}</h2>
        <div className="article">
          <div className="article__image">
            <p>{this.state.summaryQuote}</p>
          </div>
          <div className="article__content">
            {this.state.summaryArticleHeader}
            <div className="divider"></div>
            <ul>{items}</ul>
            <form
              id="summary__form"
              autoComplete="off"
              onSubmit={this.props.handleFormSubmit}
            >
              <label htmlFor="summary__input-key">
                Название характеристики
              </label>
              <input
                id="summary__input-key"
                type="text"
                name="title"
                onChange={(event) => this.props.handleInputChange(event)}
              />
              <label htmlFor="summary__input-value">
                Значение характеристики
              </label>
              <input
                id="summary__input-value"
                type="text"
                name="value"
                onChange={(event) => this.props.handleInputChange(event)}
              />
              <label htmlFor="summary__input-property-name">
                Название свойства (латиницей в camelCase)
              </label>
              <input
                id="summary__input-property-name"
                type="text"
                name="property-name"
                onChange={(event) => this.props.handleInputChange(event)}
              />
              <button>Добавить характеристику</button>
            </form>
            <div className="error-message">{this.props.errorMessage}</div>
          </div>
        </div>
      </section>
    );
  }
}
