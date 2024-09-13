import store from "./store";
import { addUser, deleteUser, updateUser } from './users.actions';
import { increment, decrement, reset } from "./counter.actions";

store.subscribe(() => console.log('Updated state', store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());

store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'Bob' }));

store.dispatch(deleteUser(1));
store.dispatch(updateUser(2, { age: 17, name: 'Bob Martin' }))
