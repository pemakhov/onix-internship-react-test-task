import React, { Component } from "react";
import { SummaryView } from "./summary-view/SummaryView";
import { UserInputSchema } from "./Validator";

export class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        firstName: {
          title: "Имя",
          value: "Линус",
        },
        lastName: {
          title: "Фамилия",
          value: "Торвальдс",
        },
        birthYear: {
          title: "Год рождения",
          value: 1969,
        },
        profession: {
          title: "Профессия",
          value: "программист",
        },
      },

      titleInput: "",
      valueInput: "",
      propertyNameInput: "",
      errorMessage: "",
    };
  }

  handleInputChange(event) {
    this.setState({ errorMessage: "" });
    const { value, name } = event.target;
    switch (name) {
      case "title":
        this.setState({ titleInput: value });
        break;
      case "value":
        this.setState({ valueInput: value });
        break;
      case "property-name":
        this.setState({ propertyNameInput: value });
        break;
      default:
        console.error("Something wrong");
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const { titleInput, valueInput, propertyNameInput } = this.state;

    console.log({ titleInput, valueInput, propertyNameInput })


    const { error } = UserInputSchema.validate({
      titleInput,
      valueInput,
      propertyNameInput,
    });

    if (error) {
      this.setState({ errorMessage: error.message });
      return;
    }

    const updatedData = { ...this.state.data };
    console.log(updatedData)

    updatedData[propertyNameInput] = { title: titleInput, value: valueInput };

    this.setState({ data: updatedData });
    event.target.reset();
  }

  render() {
    return (
      <SummaryView
        data={this.state.data}
        handleInputChange={this.handleInputChange.bind(this)}
        errorMessage={this.state.errorMessage}
        handleFormSubmit={this.handleFormSubmit.bind(this)}
      />
    );
  }
}
