import create from 'zustand'
import { formSlice } from './features/formSlice';
import { todoSlice } from './features/todoSlice';


export const store = create((set) => ({
  todo: todoSlice,
  form: formSlice
}));