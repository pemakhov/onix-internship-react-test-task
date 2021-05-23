import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setLoaded from '../../redux/actions/set-loaded';
import loadSuperheros from '../../redux/actions/load-superheros';
import withLayout from '../../hoc/withLayout';
import CustomMath from '../../service/CustomMath';
import SuperherosView from './SuperherosView';
import superheroConstants from '../../constants/superhero-constants';

const Superheros = (props) => {
  const [apiError, setApiError] = useState(null);
  const { loaded, setLoadedAction, loadSuperherosAction } = props;

  const {
    URL,
    MIN_ID,
    MAX_ID,
    SUPERHEROS_TO_SHOW
  } = superheroConstants;

  const getOneSuperhero = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  const getSuperherosByIdList = async (idList) => {
    const superheroPromises = idList.map((id) => {
      const url = URL + id;
      return getOneSuperhero(url);
    });

    return Promise.all(superheroPromises);
  };

  const init = async () => {
    const idList = CustomMath.getArrayOfRandomNumbersInRange({
      length: SUPERHEROS_TO_SHOW,
      range: {
        min: MIN_ID,
        max: MAX_ID,
      },
    });

    try {
      const heroes = await getSuperherosByIdList(idList);
      const failures = heroes.map((superhero) => superhero?.response === 'error').filter((x) => x);

      if (failures.length > 2) throw new Error('Failed to load too many superheros');

      setLoadedAction(true);
      loadSuperherosAction(heroes);
    } catch (error) {
      setApiError(() => error.message);
    }
  };

  const handleRefresh = () => {
    setLoadedAction(false);
  };

  useEffect(() => {
    if (loaded) {
      return;
    }
    init();
  });

  return <SuperherosView apiError={apiError} handleRefresh={handleRefresh} />;
};

Superheros.propTypes = {
  loaded: PropTypes.bool.isRequired,
  setLoadedAction: PropTypes.func.isRequired,
  loadSuperherosAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { loaded } = state;
  return { loaded };
};

const mapDispatchToProps = {
  setLoadedAction: setLoaded,
  loadSuperherosAction: loadSuperheros,
};

export default withLayout(connect(mapStateToProps, mapDispatchToProps)(Superheros));
