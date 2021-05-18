import { SET_LOADED } from '../../constants/action-types';

const setLoaded = (payload) => {
  return { type: SET_LOADED, payload };
};

export default setLoaded;
