import { ADD_USER, DELETE_USER } from './users.reducer';

console.log('ADDUSER:', ADD_USER);

export const addUser = (user) => {
  console.log('User:', user)

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