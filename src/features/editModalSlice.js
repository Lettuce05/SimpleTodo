import create from 'zustand';

// formSlice: The slice of state that holds all state/logic associated with the main form
export const editModalSlice = create((set) => ({
  modalShown: false,
  editInputText: '',
  editId: '',
  /*
    closeModal: closes the modal and resets modal state
  */
  closeModal: () => set({ modalShown: false, editInputText: '', editId: '' }),
  /*
    openModal: opens the modal (sets state.modalShown to true)
    @param id - id of todo being edited
  */
  openModal: (id, text) => set({ modalShown: true, editId: id, editInputText: text }),
  /*
    setEditInputText: sets editInputText to specified text
    @param text - text to set editInputText
  */
  setEditInputText: (text) => set({ editInputText: text }),
}));