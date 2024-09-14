import { LANGUAGE } from "./language.actions";

const initialState = {
  language: null
}

export const languageReducer = (state = initialState, action) => {


  switch (action.type) {
    case LANGUAGE:
      return {

        language: action.payload
      }
    default:
      return state;
  }
}

