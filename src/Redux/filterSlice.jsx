import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    show(state, action) {
      return action.payload;
    },
  },
});

export const { show } = filterSlice.actions;
