import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../core/utils/request";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await request({
      route: "users",
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
});

export const fetchCases = (builder) => {
  builder.addCase(fetchUsers.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(fetchUsers.fulfilled, (state, action) => {
    state.isLoading = false;
    state.beekeepers = action.payload.beekeepers;
    state.owners = action.payload.owners;
  });
  builder.addCase(fetchUsers.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
  });
};
