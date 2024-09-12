import { createStore } from 'redux';

const incrementAction = {
  type: "COUNTER/INCREMENT",
}

const decrementAction = {
  type: "COUNTER/DECREMENT",
}

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "COUNTER/INCREMENT":
      return state + 1;
    case "COUNTER/DECREMENT":
      return state - 1;
    default:
      return state;
  }
}


const store = createStore(counterReducer)
// store.dispatch(incrementAction)
// console.log(store.getState())
