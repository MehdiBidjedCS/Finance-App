import { configureStore } from "@reduxjs/toolkit";
import authenSlicer from "./reducers/authSlicer";
const store = configureStore({
  reducer: {
    auth: authenSlicer,
  },
});

export default store;