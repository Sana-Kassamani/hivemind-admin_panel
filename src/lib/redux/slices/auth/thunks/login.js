import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { request } from "../../../../../core/utils/request";
import { requestMethods } from "../../../../../core/enums/RequestMethods";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const response = await request({
      route: "auth/admin",
      method: requestMethods.POST,
      body: credentials,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const loginCases = (builder) => {
  builder.addCase(login.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(login.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.loggedAdmin = action.payload.user;
    localStorage.setItem("token", action.payload.token);
  });
  builder.addCase(login.rejected, (state, action) => {
    state.isLoading = false;
    console.log(action.error);
    state.error = "Invalid Credentials";
  });
};
