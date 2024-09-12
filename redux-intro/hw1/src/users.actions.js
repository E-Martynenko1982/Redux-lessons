import { ADD_USER, DELETE_USER } from './users.reducer';

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
}

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: { id: userId },
  };
};