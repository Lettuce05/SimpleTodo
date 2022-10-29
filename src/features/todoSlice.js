import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';

let localStorageSupport = false;

if (typeof (Storage) !== "undefined") {
  // there is support for local storage
  localStorageSupport = true;
}


// todoSlice: The slice of state that holds all state/logic associated with the todos/todolist
export const todoSlice = create((set) => ({
  todos: localStorageSupport && localStorage.todos ? JSON.parse(localStorage.todos) : [],
  /*
    addTodo: Adds a new todo with the specified text
    @param text - todo text
  */
  addTodo: (text) => set((state) => {
    // get new todo state
    // add new todo to array of old todos
    let newTodos = [...state.todos, { text: text, id: uuidv4(), completed: false }];

    // check if local storage is supported
    if (localStorageSupport) {
      // save todos to local storage
      localStorage.todos = JSON.stringify(newTodos);
    }

    return { todos: newTodos };
  }),
  /*
    editTodo: Edits the todo according to specified user changes
    @param id - id of todo to edit
    @param text - text to set todo's text to
  */
  editTodo: (id, text) => set((state) => {
    // get new todo state
    // iterate through todos and update todo with specified id
    let newTodos = state.todos.map(todo => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });

    // check if local storage is supported
    if (localStorageSupport) {
      // save todos to local storage
      localStorage.todos = JSON.stringify(newTodos);
    }

    return { todos: newTodos };
  }),
  /*
    setTodoStatus: Sets the status (completed/not completed) of the todo with the specified id
    @param id - id of todo to update status
  */
  setTodoStatus: (id) => set((state) => {
    // get new todo state
    // iterate through todos and update completed status of specified todo
    let newTodos = state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    // check if local storage is supported
    if (localStorageSupport) {
      // save todos to local storage
      localStorage.todos = JSON.stringify(newTodos);
    }

    return { todos: newTodos };
  }),
  /*
    removeTodo: Removes the todo with the specified id
    @param id - id of todo to delete
  */
  removeTodo: (id) => set((state) => {
    // get new todos state
    // filter through todos and keep every todo except the one the user wants deleted
    let newTodos = state.todos.filter((todo) => todo.id !== id);

    // check if local storage is supported
    if (localStorageSupport) {
      // save todos to local storage
      localStorage.todos = JSON.stringify(newTodos);
    }

    return { todos: newTodos };
  }),

}));