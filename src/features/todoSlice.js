import create from 'zustand';
import { v4 as uuidv4, NIL as NIL_UUID } from 'uuid';

let localStorageSupport = false;

if (typeof (Storage) !== "undefined") {
  // there is support for local storage
  localStorageSupport = true;
}

/*
  saveToLocal: saves specified object to local storage
  @param key - key in local storage
  @param object - object to save into local storage
*/
function saveToLocal(key, object) {
  // check if local storage is supported
  if (localStorageSupport) {
    // save object to local storage
    localStorage.setItem(key, JSON.stringify(object));
  }
}

// todoSlice: The slice of state that holds all state/logic associated with the todos/todolist
export const todoSlice = create((set) => ({
  // check local storage for initial state of todos or set to empty array if local storage todos is undefined
  todos: localStorageSupport && localStorage.todos ? JSON.parse(localStorage.todos) : [],
  // check local storage for initial state of lists or set to empty array if local storage lists is undefined
  lists: localStorageSupport && localStorage.lists ? JSON.parse(localStorage.lists) : [{ name: 'Home', id: NIL_UUID }],
  currentListId: NIL_UUID,

  /*
    addTodo: Adds a new todo with the specified text
    @param text - todo text
  */
  addTodo: (text, listId) => set((state) => {
    // get new todo state
    // add new todo to array of old todos
    let newTodos = [...state.todos, { text, id: uuidv4(), completed: false, listId }];

    // save new state to local storage
    saveToLocal('todos', newTodos);

    return { todos: newTodos };
  }),
  /*
    editTodo: Edits the todo according to specified user changes
    @param id - id of todo to edit
    @param text - text to set todo's text to
    @param listId - listId to set todo's listId to
  */
  editTodo: (id, text, listId) => set((state) => {
    // get new todo state
    // iterate through todos and update todo with specified id
    let newTodos = state.todos.map(todo => {
      if (todo.id === id) {
        todo.text = text;
        todo.listId = listId;
      }
      return todo;
    });

    // save new state to local storage
    saveToLocal('todos', newTodos);

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

    // save new state to local storage
    saveToLocal('todos', newTodos);

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

    // save new state to local storage
    saveToLocal('todos', newTodos);

    return { todos: newTodos };
  }),

  /*
    setCurrentListId: Sets the currentListId
    @param listId - listId to set currentListId to
  */
  setCurrentListId: (listId) => set({ currentListId: listId }),

  /*
    addList: Adds a new list with the specified name and color
    @param name - list name
    @param color - list color
  */
  addList: (name, color) => set((state) => {
    // get new list state
    // add new list to array of old lists
    let newLists = [...state.lists, { name, id: uuidv4(), color }];

    // save new state to local storage
    saveToLocal('lists', newLists);

    return { lists: newLists };
  }),

  /*
    removeList: Removes the list with the specified id
    @param id - id of list to delete
  */
  removeList: (id) => set((state) => {
    // get new lists state
    // filter through lists and keep every list except the one the user wants deleted
    let newLists = state.lists.filter((list) => list.id !== id);
    // remove all todos belonging to list being deleted
    let newTodos = state.todos.filter((todo) => todo.listId !== id);
    // save new state to local storage
    saveToLocal('lists', newLists);
    saveToLocal('todos', newTodos);

    // if currentListId is the id of the list we are removing then set currentListId to Home list id
    let newCurrentListId = id;
    if (id === state.currentListId){
      newCurrentListId = NIL_UUID;
    }

    return { lists: newLists, todos: newTodos, currentListId: newCurrentListId };
  }),

}));