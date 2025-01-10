import { createSlice } from "@reduxjs/toolkit";
import { fetchCases, fetchUsers } from "../../thunks/fetchUsers";
import { act } from "react";

const usersInitialState = {
  beekeepers: [],
  owners: [],
  isLoading: false,
  error: null,
};
const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    fetchCases(builder);
  },
});

export default usersSlice.reducer;
