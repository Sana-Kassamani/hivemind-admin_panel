import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../../../core/utils/request";
import { requestMethods } from "../../../../../core/enums/RequestMethods";

export const banUser = createAsyncThunk("users/banUser", async ({ data }) => {
  try {
    const response = await request({
      route: "user-settings/ban",
      method: requestMethods.POST,
      body: data,
    });
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
});

export const banUserCases = (builder) => {
  builder.addCase(banUser.fulfilled, (state, action) => {
    const { _id, userType, settings } = action.payload;

    if (userType === "Beekeeper") {
      state.beekeepers = state.beekeepers.map((b) => {
        if (b._id === _id) {
          return { ...b, settings: { ...b.settings, banned: settings.banned } };
        }
        return b;
      });
    } else if (userType === "Owner") {
      state.owners = state.owners.map((o) => {
        if (o._id === _id) {
          return { ...o, settings: { ...o.settings, banned: settings.banned } };
        }
        return o;
      });
    }
  });
  builder.addCase(banUser.rejected, (state, action) => {
    state.error = action.error.message;
  });
};
