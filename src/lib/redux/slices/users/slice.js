import { createSlice } from "@reduxjs/toolkit";

const usersInitialState = {
  users: [],
  isLoading: false,
  error: null,
};
const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {},
});

export default usersSlice.reducer;
