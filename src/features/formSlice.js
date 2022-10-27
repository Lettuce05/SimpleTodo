import create from 'zustand';

// formSlice: The slice of state that holds all state/logic associated with the main form
export const formSlice = create((set) => ({
  inputText: '',
  /*
    setInputText: sets the inputText, used to create a controlled form input
    @param text - text to set inputText state to
  */
  setInputText: (text) => set({ inputText: text }),
}));