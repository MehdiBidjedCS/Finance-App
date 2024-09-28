import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  refreshToken: null,
  accessToken: null,
  is_Authentificated: false,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    is_Authentificated: (state) => {
      state.is_Authentificated = true;
    },
  },
});

export const { is_Authentificated } = authSlicer.actions;
export default authSlicer.reducer;
