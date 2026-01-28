import { createSlice } from '@reduxjs/toolkit';
import type { TopicsState } from './topics.types';
import { fetchTopics } from './topics.thunks';

const initialState: TopicsState = {
  list: [],
  loading: false,
  error: null,
};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopics.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTopics.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTopics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Error';
      });
  },
});

export default topicsSlice.reducer;
