import store from './store.js';
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
  console.log('Store state updated:', store.getState());
});

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 77, name: 'John' }));

store.dispatch(deleteUser(76));