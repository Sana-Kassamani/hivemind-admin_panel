import { createSlice } from "@reduxjs/toolkit";

const apiariesInitialState = {
  apiaries: new Map(),
  isLoading: false,
  error: null,
};
const apiariesSlice = createSlice({
  name: "apiaries",
  initialState: apiariesInitialState,
  reducers: {},
  extraReducers: (builder) => {},
});
