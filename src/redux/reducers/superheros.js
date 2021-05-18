import { LOAD_SUPERHEROS } from '../../constants/action-types';

const superheros = (state = [], action) => {
  if (action.type === LOAD_SUPERHEROS) {
    return action.payload;
  }
  return state;
};

export default superheros;
