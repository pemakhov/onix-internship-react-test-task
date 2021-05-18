import { combineReducers } from 'redux';
import superheros from './superheros';
import loaded from './loaded';

export default combineReducers({
  superheros,
  loaded,
});
