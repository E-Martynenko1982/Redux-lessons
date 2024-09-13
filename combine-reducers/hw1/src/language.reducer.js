import { LANGUAGE } from "./language.actions";

const initialState = {
  language: 'en'
}
const LanguageReducer = (state = initialState, action) => {
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

export default LanguageReducer;