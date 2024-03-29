import { createSlice } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import { RootState } from "../index";
import { setTheme } from "../../utils/common";

const configSlice = createSlice({
  name: "config",
  initialState: { theme: "light", loading: false },
  reducers: {
    switchDark: (state) => {
      state.theme = "dark";
      setTheme("dark");
    },
    switchLight: (state) => {
      state.theme = "light";
      setTheme("light");
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setLoaded: (state) => {
      state.loading = false;
    },
  },
});

export const { switchDark, switchLight, setLoading, setLoaded } =
  configSlice.actions;

export default configSlice.reducer;

export const selectTheme = (state: RootState) => state.config.theme;
export const selectLoading = (state: RootState) => state.config.loading;
