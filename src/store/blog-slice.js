import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    id: 1,
  },
  reducers: {
    updateId(state) {
      state.id = state.id + 1;
    },
  },
});

export const cartActions = blogSlice.actions;

export default blogSlice;
