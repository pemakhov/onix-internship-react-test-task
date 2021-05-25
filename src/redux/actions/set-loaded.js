import { SET_LOADED } from '../../constants/action-types';

const setLoaded = (dispatch) => {
  return (payload) => {
    dispatch({ type: SET_LOADED, payload });
  };
};

export default setLoaded;
