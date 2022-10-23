import create from 'zustand';

export const formSlice = create((set) => ({
  inputText: '',
  setInputText: (text) => set({ inputText: text }),
}));