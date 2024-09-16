export const SET_PAGE = 'PAGE/SET';
export const GO_NEXT = 'PAGE/NEXT';
export const GO_PREV = 'PAGE/PREV';

export const setPage = (pageNumber) => ({
  type: SET_PAGE,
  payload: pageNumber,
});

export const goNext = () => ({
  type: GO_NEXT,
});


export const goPrev = () => ({
  type: GO_PREV,
});