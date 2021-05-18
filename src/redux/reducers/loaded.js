import { SET_LOADED } from '../../constants/action-types';

const loaded = (state = false, action) => {
  if (action.type === SET_LOADED) {
    return action.payload;
  }

  return state;
};

export default loaded;
