import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/users/slice.js";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
