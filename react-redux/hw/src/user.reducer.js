import { SET_USERS, SET_CURRENT_PAGE } from "./user.actions";

const initialState = {
  users: {
    usersList: [],
    currentPage: 0,
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          usersList: action.payload,
        }
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        users: {
          ...state.users,
          currentPage: action.payload,
        }
      };
    default:
      return state;
  }
};
export default userReducer;