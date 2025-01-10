import { createSlice } from "@reduxjs/toolkit";

class Apiary {
  constructor(id, label, location) {
    this.id = id;
    this.label = label;
    this.location = location;
  }
}
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

export default apiariesSlice.reducer;
