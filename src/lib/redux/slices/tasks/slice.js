import { createSlice } from "@reduxjs/toolkit";
import { fetchApiaries } from "../apiaries/thunks/fetchApiaries";

const tasksInitialState = {
  tasks: {},
  isLoading: false,
  error: null,
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    clear: (current) => {
      current.tasks = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiaries.fulfilled, (state, action) => {
      action.payload.forEach((apiary) => {
        const { hives, tasks, ...rest } = apiary;
        state.tasks[apiary._id] = tasks;
      });
    });
  },
});

export default tasksSlice.reducer;
