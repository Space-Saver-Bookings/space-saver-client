import {create} from 'zustand';

const useMenuOptionStore = create((set) => ({
  menuOption: 'Booked Rooms',
  setMenuOption: (option) => set({menuOption: option}),
}));

export default useMenuOptionStore;
