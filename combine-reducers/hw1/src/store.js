import { createStore, combineReducers } from 'redux';
import { userReducer } from './user.reducer';
import { cartReducer } from './cart.reducer';
import { languageReducer } from './language.reducer';

const rootReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: cartReducer,
})

const initialState = {
  language: "en",
  user: null,
  cart: {
    products: []
  }
}

const store = createStore(rootReducer, initialState);
export default store;
