import { createSlice } from "@reduxjs/toolkit";
import { loginCases } from "./thunks/login";

const authInitialState = {
  loggedAdmin: null,
  isLoading: false,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    loginCases(builder);
  },
});

export default authSlice.reducer;
