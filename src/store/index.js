import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './blog-slice';
import editPopoverSlice from './edit-popover-slice';


const store = configureStore({
  reducer: { blog: blogSlice.reducer, editPopover: editPopoverSlice.reducer },
});

export default store;