import { LANGUAGE } from "./language.actions";

const initialState = {
  language: 'en'
}

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state;
  }
}

