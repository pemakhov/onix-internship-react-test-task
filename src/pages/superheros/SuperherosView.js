import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Superhero from './Superhero';
import Button from '../../components/button/Button';

const SuperherosView = (props) => {
  const {
    apiError,
    handleRefresh,
  } = props;

  const loaded = useSelector((state) => state.loaded);
  const superheros = useSelector((state) => state.superheros);
  const headerText = 'The list of superheros';
  const errorMessage = apiError && 'Failed to load data';
  const buttonValue = loaded ? 'Refresh' : '...loading';
  const columnNames = [
    'Name',
    'Intelligence',
    'Strength',
    'Speed',
    'Durability',
    'Power',
    'Combat',
    'Alignment',
    'Gender',
  ];

  return (
    <main className="container">
      <hr />
      <h2>{headerText}</h2>
      {errorMessage}
      <Button value={buttonValue} onClick={handleRefresh} loading={!loaded} />
      <div id="data">
        <table className="table table-striped">
          <thead>
            <tr>
              {columnNames.map((name) => (
                <td key={name}>{name}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {superheros.map((superhero) => (
              <Superhero data={superhero} key={superhero.id} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

SuperherosView.propTypes = {
  apiError: PropTypes.string,
  handleRefresh: PropTypes.func.isRequired,
};

SuperherosView.defaultProps = {
  apiError: null,
};

export default SuperherosView;
