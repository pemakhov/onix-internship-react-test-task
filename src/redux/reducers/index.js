import { LOAD_SUPERHEROS } from '../../constants/action-types';

const initialState = {
  superheros: [],
};

const rootReducer = (state = initialState, action) => {
  if (action.type === LOAD_SUPERHEROS) {
    const newState = { ...state };
    newState.superheros = action.payload;
    return newState;
  }
  return state;
};

export default rootReducer;
