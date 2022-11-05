import create from 'zustand'
import { formSlice } from './features/formSlice';
import { todoSlice } from './features/todoSlice';
import { editModalSlice } from './features/editModalSlice';
import { removeModalSlice } from './features/removeModalSlice';
import { navSlice } from './features/navSlice';

// store: Main store that contains/controls all global state for the application
export const store = create((set) => ({
  todo: todoSlice,
  form: formSlice,
  editModal: editModalSlice,
  nav: navSlice,
  removeModal: removeModalSlice
}));