import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import {  RootState } from '../index';

const configSlice = createSlice({
  name: 'config',
  initialState: { theme: 'light' },
  reducers: {
    switchDark: (state) => {
      state.theme = 'dark';
    },
    switchLight: (state) => {
      state.theme = 'light';
    },
  },
});

export const { switchDark, switchLight } = configSlice.actions;


export default configSlice.reducer;

export const selectTheme = (state: RootState) => state.config.theme;
