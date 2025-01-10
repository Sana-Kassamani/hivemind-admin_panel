import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/users/slice.js";
import authReducer from "./slices/auth/slice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
});

export default store;
