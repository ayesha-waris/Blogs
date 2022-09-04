import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './blog-slice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: { blog: blogSlice.reducer, auth: authSlice.reducer },
});

export default store;