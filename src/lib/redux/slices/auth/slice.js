import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  loggedAdmin: null,
  isLoading: false,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
});

export default authSlice.reducer;
