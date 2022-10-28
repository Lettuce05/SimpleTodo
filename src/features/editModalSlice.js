import create from 'zustand';

// formSlice: The slice of state that holds all state/logic associated with the main form
export const editModalSlice = create((set) => ({
  modalShown: false,
  /*
    closeModal: closes the modal (sets state.modalShown to false)
  */
  closeModal: () => set({ modalShown: false }),
  /*
    openModal: opens the modal (sets state.modalShown to true)
  */
  openModal: () => set({ modalShown: true }),
}));