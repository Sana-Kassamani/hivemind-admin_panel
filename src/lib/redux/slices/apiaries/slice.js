import { createSlice } from "@reduxjs/toolkit";
import { fetchApiariesCases } from "../../thunks/fetchApiaries";

export class Apiary {
  constructor({ id, label, location }) {
    this.id = id;
    this.label = label;
    this.location = location;
  }
}
const apiariesInitialState = {
  apiaries: {},
  isLoading: false,
  error: null,
};
const apiariesSlice = createSlice({
  name: "apiaries",
  initialState: apiariesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    fetchApiariesCases(builder);
  },
});

export default apiariesSlice.reducer;
