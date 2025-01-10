import { createSlice, current } from "@reduxjs/toolkit";
import { fetchApiaries } from "../../thunks/fetchApiaries";

const hivesInitialState = {
  hives: {},
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
    builder.addCase(fetchApiaries.fulfilled, (state, action) => {
      action.payload.forEach((apiary) => {
        const { hives, tasks, ...rest } = apiary;
        state.hives[apiary._id] = hives;
      });
    });
  },
});

export default hivesSlice.reducer;
