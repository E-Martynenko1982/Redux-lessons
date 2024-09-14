import store from './store.js';
import { setUser, removeUser } from './user.actions.js';
import { addProduct, removeProduct } from './cart.actions.js';
import { setLanguage } from './language.actions.js';

store.subscribe(() => {
  console.log('Store state changed:', store.getState());

})
store.dispatch(setLanguage('ua'));
store.dispatch(setUser({ name: 'Georg' }));
store.dispatch(addProduct({ id: 76, name: 'butter' }));
store.dispatch(addProduct({ id: 88, name: 'milk' }));
store.dispatch(removeProduct(76));
store.dispatch(removeUser());



