import { SET_PAGE, GO_NEXT, GO_PREV } from "./user.actions";


const initialState = {
  users: {
    usersList: [
      { id: 'id-0', age: 21, name: 'Bob' },
      { id: 'id-1', age: 17, name: 'Tom' },
      { id: 'id-2', age: 18, name: 'Tad' },
      { id: 'id-3', age: 45, name: 'Justin' },
      { id: 'id-4', age: 45, name: 'Franklin' },
      { id: 'id-5', age: 45, name: 'John' },
      { id: 'id-6', age: 45, name: 'Andrew' },
      { id: 'id-7', age: 45, name: 'Pol' },
      { id: 'id-8', age: 45, name: 'Ron' },
      { id: 'id-9', age: 45, name: 'Harry' },
      { id: 'id-10', age: 45, name: 'Anna' },
    ],
    currentPage: 0,
  },
};

const usersReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_PAGE: {
      return {
        ...state,
        users: {
          ...state.users,
          currentPage: actions.payload
        }
      }
    };
    case GO_NEXT: {
      return {
        ...state,
        users: {
          ...state.users,
          currentPage: state.users.currentPage + 1,
        }
      }
    }
    case GO_PREV: {
      return {
        ...state,
        users: {
          ...state.users,
          currentPage: state.users.currentPage - 1,
        }
      }
    }
    default:
      return state;
  }
};
export default usersReducer;