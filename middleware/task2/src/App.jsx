import React from "react";
import UserInfo from "./users/UserInfo";
import SearchField from "./users/SearchField";
import { Provider } from 'react-redux';
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <UserInfo />
        <SearchField />
      </div>
    </Provider>



  )
};
export default App;

//1 Собрать данніе из инпута
// 2 Сделать запрос и показать спиннер
//3 Получить данніе и записать в стейт
//4 спрятать спиннер