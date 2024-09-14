export const LANGUAGE = 'SET_LANGUAGE';

export const setLanguage = (language) => {
  return {
    type: LANGUAGE,
    payload: language, // передаємо мову в пейлоад 
  }
};
