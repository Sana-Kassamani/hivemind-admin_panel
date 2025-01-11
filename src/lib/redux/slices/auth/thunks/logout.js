import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../../../core/utils/request";
import { requestMethods } from "../../../../../core/enums/RequestMethods";

export const logout = createAsyncThunk("auth/logout", async () => {
  return "Nothing";
  //   try {
  //     const response = await request({
  //       route: "auth",
  //       method: requestMethods.POST,
  //       body: credentials,
  //     });
  //     if (response.status === 200) {
  //       return response.data;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
});

export const logoutCases = (builder) => {
  builder.addCase(logout.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(logout.fulfilled, (state, action) => {
    state.isLoading = false;
    state.loggedAdmin = null;
    localStorage.removeItem("token");
  });
  builder.addCase(logout.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
  });
};
