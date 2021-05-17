import { LOAD_SUPERHEROS } from '../../constants/action-types';

const loadSuperheros = (payload) => { 
  return { type: LOAD_SUPERHEROS, payload };
};

export default loadSuperheros;
