import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setLoaded from '../../redux/actions/set-loaded';
import getSuperheros from '../../redux/actions/get-superheros';
import withLayout from '../../hoc/withLayout';
import CustomMath from '../../service/CustomMath';
import SuperherosView from './SuperherosView';
import superheroConstants from '../../constants/superhero-constants';

const Superheros = (props) => {
  const [apiError, setApiError] = useState(null);
  const { loaded, setLoadedAction, getSuperherosAction } = props;

  const { MIN_ID, MAX_ID, SUPERHEROS_TO_SHOW } = superheroConstants;

  const init = async () => {
    const idList = CustomMath.getArrayOfRandomNumbersInRange({
      length: SUPERHEROS_TO_SHOW,
      range: {
        min: MIN_ID,
        max: MAX_ID,
      },
    });

    try {
      getSuperherosAction(idList).then(() => setLoadedAction(true));
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
  getSuperherosAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { loaded } = state;
  return { loaded };
};

const mapDispatchToProps = (dispatch) => ({
  setLoadedAction: dispatch((payload) => setLoaded(payload)),
  getSuperherosAction: dispatch((idList) => getSuperheros(idList)),
});

export default withLayout(connect(mapStateToProps, mapDispatchToProps)(Superheros));
