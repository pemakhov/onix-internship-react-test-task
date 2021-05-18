import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import loadSuperheros from '../../redux/actions';
import withLayout from '../../layout/withLayout';
import CustomMath from '../../service/CustomMath';
import SuperherosView from './SuperherosView';
import superheroConstants from '../../constants/superhero-constants';

const SuperheroGame = () => {
  const [loaded, setLoaded] = useState(false);
  const [apiError, setApiError] = useState(null);
  const dispatch = useDispatch();

  const {
    URL,
    MIN_ID,
    MAX_ID,
    SUPERHEROS_TO_SHOW
  } = superheroConstants;

  const getOneSuperhero = async (url) => {
    const response = await fetch(url);
    const superhero = await response.json();
    return superhero;
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

      setLoaded(() => true);
      dispatch(loadSuperheros(heroes));
    } catch (error) {
      setApiError(() => error.message);
    }
  };

  const handleRefresh = () => {
    setLoaded(() => false);
  };

  useEffect(() => {
    if (loaded) {
      return;
    }
    init();
  });

  return <SuperherosView loaded={loaded} apiError={apiError} handleRefresh={handleRefresh} />;
};

export default withLayout(SuperheroGame);
