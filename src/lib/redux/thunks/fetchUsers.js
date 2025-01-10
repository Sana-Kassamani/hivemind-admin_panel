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
