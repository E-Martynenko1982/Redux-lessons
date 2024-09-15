export const SET_USERS = 'USERS/SET';
export const SET_CURRENT_PAGE = 'USERS/CURRENT_PAGE';

export const setUsers = (users) => {


  return {
    type: SET_USERS,
    payload: users
  }
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page
  }
}