import create from 'zustand';

// removeModalSlice: The slice of state that holds all state/logic associated with the RemoveListModal
export const removeModalSlice = create((set) => ({
  modalShown: false,
  removeId: '',
  /*
    closeModal: closes the modal and resets modal state
  */
  closeModal: () => set({ modalShown: false, removeId: '' }),
  /*
    openModal: opens the modal (sets state.modalShown to true)
    @param id - id of list being removed
  */
  openModal: (id) => set({ modalShown: true, removeId: id }),
}));