import create from 'zustand';

// navSlice: The slice of state that holds all state/logic associated with the nav
export const navSlice = create((set) => ({
  open: false,
  /*
    closeModal: closes the nav
  */
  closeNav: () => set({ open: false }),
  /*
    openNav: opens the nav (sets state.true to true)
  */
  openNav: () => set({ open: true }),
}));