import { createStore, applyMiddleware } from 'redux';
import counterReducer from './counter.reducer';

const logger = store => next => action => {
  console.group(action.type);
  console.info(action);
  const result = next(action);
  console.log('new state', store.getState());
  console.groupEnd();
  return result
}


const store = createStore(counterReducer,

  applyMiddleware(logger)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
