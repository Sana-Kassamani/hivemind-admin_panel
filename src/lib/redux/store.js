import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/users/slice.js";
import authReducer from "./slices/auth/slice.js";
import { createLogger } from "redux-logger";
import apiariesReducer from "./slices/apiaries/slice.js";

const logger = createLogger();
const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    apiaries: apiariesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
