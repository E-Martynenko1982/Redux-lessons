import { INCREMENT, DECREMENT, RESET } from "./counter.actions";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case RESET:
      return 0;
    case DECREMENT:
      return state - 1;
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

export default counterReducer;