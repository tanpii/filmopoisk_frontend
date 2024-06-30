import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: !!localStorage.getItem('token'),
  token: localStorage.getItem('token') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setLoggedIn, setLoggedOut } = authSlice.actions;

export default authSlice;
