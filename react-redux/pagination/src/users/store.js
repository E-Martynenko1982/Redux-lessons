import { createStore, combineReducers } from 'redux';
import usersReducer from './user.reducer';

const store = createStore(usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;