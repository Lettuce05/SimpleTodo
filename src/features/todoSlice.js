import create from 'zustand';

export const todoSlice = create((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({ todos: [...state.todos, {text: text}]})),
}));