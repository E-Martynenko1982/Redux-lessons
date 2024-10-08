import React from 'react';
import { Provider } from 'react-redux';
import store from './users/store.js';
import UsersList from './users/UsersList.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}

export default App;
