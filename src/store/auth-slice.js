import { createSlice } from "@reduxjs/toolkit";

// Retrieve authentication state from local storage, defaulting to false if not present
const initialAuthState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      // Save the updated authentication state to local storage
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
    },
    logout(state) {
      state.isAuthenticated = false;
      // Save the updated authentication state to local storage
      localStorage.setItem("isAuthenticated", JSON.stringify(false));
    },
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
