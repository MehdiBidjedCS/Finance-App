import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlicer";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
