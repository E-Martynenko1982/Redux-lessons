import { SET_USER, REMOVE_USER } from "./user.actions";

const initialState = {
  user: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {

        user: action.payload,
      }
    case REMOVE_USER:
      return {

        user: null,
      }
    default:
      return state
  }
}

