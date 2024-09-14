import { LANGUAGE } from "./language.actions";

const initialState = null



export const languageReducer = (state = initialState, action) => {


  switch (action.type) {
    case LANGUAGE:
      return action.payload;

    default:
      return state;
  }
}

