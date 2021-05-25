import { SET_SUPERHEROS } from '../../constants/action-types';

const setSuperheros = (payload) => { 
  return { type: SET_SUPERHEROS, payload };
};

export default setSuperheros;
