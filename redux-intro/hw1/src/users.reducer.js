

export const ADD_USER = 'USER/INCREMENT';
export const DELETE_USER = 'USER/DECREMENT';

const initialState = {
  usersList: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload]
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default userReducer;