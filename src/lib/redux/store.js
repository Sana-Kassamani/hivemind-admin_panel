import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/users/slice.js";
import authReducer from "./slices/auth/slice.js";
import { createLogger } from "redux-logger";

const logger = createLogger();
const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
