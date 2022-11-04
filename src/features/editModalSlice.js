import create from 'zustand';

// editModalSlice: The slice of state that holds all state/logic associated with the EditModal 
export const editModalSlice = create((set) => ({
  modalShown: false,
  editInputText: '',
  editId: '',
  editListInput: '',
  /*
    closeModal: closes the modal and resets modal state
  */
  closeModal: () => set({ modalShown: false, editInputText: '', editId: '' }),
  /*
    openModal: opens the modal (sets state.modalShown to true)
    @param id - id of todo being edited
    @param text - current text of todo
    @param listId - current listId of todo
  */
  openModal: (id, text, listId) => set({ modalShown: true, editId: id, editInputText: text, editListInput: listId }),
  /*
    setEditInputText: sets editInputText to specified text
    @param text - text to set editInputText
  */
  setEditInputText: (text) => set({ editInputText: text }),
  /*
    setEditListInput: sets editListInput to specified listId
    @param listId - listId to set editListInput
  */
  setEditListInput: (listId) => set({ editListInput: listId }),
}));