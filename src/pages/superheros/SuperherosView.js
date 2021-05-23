import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Superhero from './Superhero';
import Button from '../../components/button/Button';
import TSuperhero from './TSuperhero';

const SuperherosView = (props) => {
  const {
    apiError,
    handleRefresh,
  } = props;

  const { loaded, superheros } = props;
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
                <th key={name}>{name}</th>
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
  loaded: PropTypes.bool.isRequired,
  superheros: PropTypes.arrayOf(PropTypes.oneOfType([TSuperhero])).isRequired,
  apiError: PropTypes.string,
  handleRefresh: PropTypes.func.isRequired,
};

SuperherosView.defaultProps = {
  apiError: null,
};

const mapStateToProps = (state) => {
  const { loaded, superheros } = state;
  return { loaded, superheros };
};

export default connect(mapStateToProps)(SuperherosView);
