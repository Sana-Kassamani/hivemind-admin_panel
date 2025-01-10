import { createSlice } from "@reduxjs/toolkit";
import { fetchApiaries } from "../../thunks/fetchApiaries";

const hivesInitialState = {
  hives: {},
};
const hives = createSlice({
  name: "hives",
  initialState: hivesInitialState,
  reducers: {
    load: (current, { payload }) => {
      const { apiaryId, hives } = payload;
      current.hives[apiaryId] = hives;
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

export default hives.reducer;
