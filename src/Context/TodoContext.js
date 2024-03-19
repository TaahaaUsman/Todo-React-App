import { useContext, createContext } from "react";

const TodoContext = createContext({
  todos: [{
    id: 1,
    todo: 'Message msg',
    completed: false
  }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {}
});

function useTodo() {
  return useContext(TodoContext);
}

const TodoPorvider = TodoContext.Provider;

export {TodoContext, useTodo, TodoPorvider}