import { createSlice } from '@reduxjs/toolkit';

const initialPopoverStates= {
  ifPopover: false

};
const editPopoverSlice = createSlice({
  name: 'editPopover',
  initialState: initialPopoverStates,
  reducers: {
    setPopover(state) {
      state.ifPopover = true;
    },
    eliminatePopover(state) {
      state.ifPopover = false;
    },
  },
});
export const editPopoverActions = editPopoverSlice.actions;
export default editPopoverSlice;