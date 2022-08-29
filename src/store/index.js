import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './blog-slice';



const store = configureStore({
  reducer: { blog: blogSlice.reducer },
});

export default store;