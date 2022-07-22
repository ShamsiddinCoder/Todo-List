import React from "react";
import Todo from './Componets/Todo/Todo';
import TodoList from './Componets/TodoList/TodoList';

import {AppStyle} from './AppStyled';

function App() {
  return (
    <AppStyle>
      <Todo />
      <TodoList />
    </AppStyle>
  );
}

export default App;
