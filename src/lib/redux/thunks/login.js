import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../core/utils/request";
import { requestMethods } from "../../../core/enums/RequestMethods";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const response = await request({
      route: "auth",
      method: requestMethods.POST,
      body: credentials,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
});
