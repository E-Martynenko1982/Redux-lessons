import React from "react";
import UserTable from "./UserTable";
import { Provider } from 'react-redux';
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <UserTable />
    </Provider>
  )
};
export default App;
