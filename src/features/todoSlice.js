import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';

// todoSlice: The slice of state that holds all state/logic associated with the todos/todolist
export const todoSlice = create((set) => ({
  todos: [],
  /*
    addTodo: Adds a new todo with the specified text
    @param text - todo text
  */
  addTodo: (text) => set((state) => ({ todos: [...state.todos, { text: text, id: uuidv4(), completed: false }] })),
  /*
    setTodoStatus: Sets the status (completed/not completed) of the todo with the specified id
    @param id - id of todo to update status
  */
  setTodoStatus: (id) => set((state) => ({
    todos: state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
  })),
  /*
    removeTodo: Removes the todo with the specified id
    @param id - id of todo to delete
  */
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));