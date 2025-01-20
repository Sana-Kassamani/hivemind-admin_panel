import { createSlice, current } from "@reduxjs/toolkit";
import { fetchApiaries } from "../apiaries/thunks/fetchApiaries";
import { fetchHivesCases } from "./thunks/fetchHives";

const hivesInitialState = {
  hives: {},
  isLoading: false,
  error: null,
};
const hivesSlice = createSlice({
  name: "hives",
  initialState: hivesInitialState,
  reducers: {
    clear: (current) => {
      current.hives = {};
    },
  },
  extraReducers: (builder) => {
    fetchHivesCases(builder);
  },
});

export default hivesSlice.reducer;
