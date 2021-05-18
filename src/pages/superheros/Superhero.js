import React from 'react';
import { nanoid } from 'nanoid';
import TSuperhero from './TSuperhero';

const Superhero = (props) => {
  const { data } = props;

  const {
    name,
    powerstats,
    biography,
    appearance
  } = data;

  const {
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat
  } = powerstats;

  const { alignment } = biography;
  const { gender } = appearance;

  const dataSet = [name, intelligence, strength, speed, durability, power, combat, alignment, gender];

  const itemIsNotAvailable = (item) => ['null', '-', undefined, null].includes(item);

  return (
    <tr key={name}>
      {dataSet.map((item) => <td key={nanoid()}>{itemIsNotAvailable(item) ? 'n/a' : item}</td>)}
    </tr>
  );
};

Superhero.propTypes = {
  data: TSuperhero,
};

Superhero.defaultProps = {
  data: null,
};

export default Superhero;
