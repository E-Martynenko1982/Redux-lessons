import React from "react";
import { Provider } from 'react-redux';
import TodoList from "./tasks/components/TodoList";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>

  )
};
export default App;

//1.we take the logic of the request for tasks into the action. it will be async
//2.