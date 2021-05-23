import React from 'react';
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

  const dataSet = {
    name,
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat,
    alignment,
    gender
  };

  const itemIsNotAvailable = (item) => ['null', '-', undefined, null].includes(item);

  return (
    <tr>
      {Object.entries(dataSet).map((item) => <td key={item[0]}>{itemIsNotAvailable(item[1]) ? 'n/a' : item[1]}</td>)}
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
