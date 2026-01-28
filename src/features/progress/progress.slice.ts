import { createSlice } from '@reduxjs/toolkit';
import type { ProgressState } from './progress.types';
import { fetchProgress, toggleProgress } from './progress.thunks';

const initialState: ProgressState = {
  map: {},
  loading: false,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgress.fulfilled, (state, action) => {
        state.map = action.payload;
      })
      .addCase(toggleProgress.fulfilled, (state, action) => {
        const { problemSlug, completed } = action.payload;
        state.map[problemSlug] = completed;
      });
  },
});

export default progressSlice.reducer;