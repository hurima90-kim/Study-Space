import { TodoListItem } from "components/TodoListItem";
import React from "react";

const todos: Array<Todo> = [
  {text: 'Walk the dog', complete: true},
  {text: 'Write app', complete: false},
];

const App : React.FC = () => {
  return (
    <>
      <TodoListItem todo={todos[0]}/>
      <TodoListItem todo={todos[1]}/>
    </>
  );
}

export default App;
