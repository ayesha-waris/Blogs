import { createSlice } from '@reduxjs/toolkit';

const initialAuthStates= {
  isAuthenticated: false

};
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthStates,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;