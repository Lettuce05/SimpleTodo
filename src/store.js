import create from 'zustand'
import { formSlice } from './features/formSlice';
import { todoSlice } from './features/todoSlice';

// store: Main store that contains/controls all global state for the application
export const store = create((set) => ({
  todo: todoSlice,
  form: formSlice
}));