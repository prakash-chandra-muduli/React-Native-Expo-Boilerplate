import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userData: null,
};

export const authSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    onLogin: (state) => {
      state.isLoggedIn = true;
    },
    onLogout: (state) => {
      state.isLoggedIn = false;
    },
    updateUserInformation: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { onLogin, onLogout, updateUserInformation } = authSlice.actions;

export default authSlice.reducer;
