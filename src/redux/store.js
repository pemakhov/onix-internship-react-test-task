import { createStore } from 'redux';
import superherosReducer from './reducers';

const store = createStore(superherosReducer);

export default store;
