import { createAsyncThunk } from "@reduxjs/toolkit";
import { Apiary } from "../slice";
import { request } from "../../../../../core/utils/request";
import { useDispatch } from "react-redux";

export const fetchApiaries = createAsyncThunk(
  "apiaries/fetchApiaries",
  async () => {
    try {
      const response = await request({
        route: "apiaries",
      });

      if (response.status === 200) {
        console.log("Apiaries are", response.data);
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchApiariesCases = (builder) => {
  builder.addCase(fetchApiaries.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(fetchApiaries.fulfilled, (state, action) => {
    state.isLoading = false;
    action.payload.forEach((apiary) => {
      const { hives, tasks, ...rest } = apiary;
      state.apiaries[apiary._id] = {
        ...rest,
        hivesNb: hives.length,
        tasksNb: tasks.length,
      };
    });
  });
  builder.addCase(fetchApiaries.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
  });
};
