import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export const todoSlice = create((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({ todos: [...state.todos, { text: text, id: uuidv4(), completed: false }] })),
}));