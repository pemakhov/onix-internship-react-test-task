import React, { Component } from "react";
import CustomMath from "../../service/CustomMath";
import { Superhero } from "./Superhero";

export class SuperheroList extends Component {
  state = {
    superheros: [],
  };

  URL = "https://www.superheroapi.com/api.php/10159321593748921/";
  MIN_ID = 1;
  MAX_ID = 732;
  SUPERHEROS_TO_SHOW = 10;

  isSuccessfulResponse(res) {
    return res === "success";
  }

  async getSuperhero(url) {
    const response = await fetch(url);
    const superhero = await response.json();
    return superhero;
  }

  async componentDidMount() {
    const superheroIdList = CustomMath.getArrayOfRandomNumbersInRange({
      length: this.SUPERHEROS_TO_SHOW,
      range: {
        min: this.MIN_ID,
        max: this.MAX_ID,
      },
    });

    const superheroPromises = superheroIdList.map((id) => {
      const url = this.URL + id;
      return this.getSuperhero(url);
    });

    const responses = await Promise.all(superheroPromises);
    const superheros = responses.filter((res) =>
      this.isSuccessfulResponse(res.response)
    );

    this.setState({ superheros: [...superheros] });
  }

  render() {
    return (
      <section id="superheros">
        <h2>Heroes are made by choice</h2>
        {this.state.superheros.map((superhero) => (
          <Superhero data={superhero} key={superhero.id} />
        ))}
      </section>
    );
  }
}
