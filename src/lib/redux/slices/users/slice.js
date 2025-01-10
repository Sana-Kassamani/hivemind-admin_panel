import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersCases, fetchUsers } from "./fetchUsers";
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
  reducers: {
    clear: (current) => {
      current.beekeepers = [];
      current.owners = [];
    },
  },
  extraReducers: (builder) => {
    fetchUsersCases(builder);
  },
});

export default usersSlice.reducer;
