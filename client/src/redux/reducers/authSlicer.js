import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  refreshToken: null,
  accessToken: null,
  is_Authentificated: false,
};

const authenSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    is_Authentificated: (state) => {
      state.is_Authentificated = true;
    },
  },
});

export const { is_Authentificated } = authenSlicer.actions;
export default authenSlicer.reducer;
