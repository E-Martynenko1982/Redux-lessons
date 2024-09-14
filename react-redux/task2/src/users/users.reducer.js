import { ADD_USER, DELETE_USER } from "./users.actions";

const initialState = {
  usersList: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData)
      }
    case DELETE_USER:
      const newList = state.usersList.filter(user => {
        return user.id !== action.payload.userId
      });
      return {
        ...state,
        userList: newList,
      }
    default:
      return state
  }
};

export default userReducer;