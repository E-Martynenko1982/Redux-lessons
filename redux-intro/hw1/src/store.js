import { createStore } from 'redux';
import userReducer from './users.reducer';

const store = createStore(userReducer, { usersList: [] });
export default store;
