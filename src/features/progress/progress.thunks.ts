import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../services/apiClient';
import type { ProgressMap, ToggleProgressResponse } from './progress.types';

export const fetchProgress = createAsyncThunk<
  ProgressMap,
  void,
  { rejectValue: string }
>('progress/fetch', async (_, { rejectWithValue }) => {
  try {
    const { data } = await apiClient.get('/progress');
    return data.data as ProgressMap;
  } catch {
    return rejectWithValue('Failed to fetch progress');
  }
});

export const toggleProgress = createAsyncThunk<
  ToggleProgressResponse,
  string,
  { rejectValue: string }
>('progress/toggle', async (problemSlug, { rejectWithValue }) => {
  try {
    const { data } = await apiClient.post('/progress/toggle', {
      problemSlug,
    });
    return data.data as ToggleProgressResponse;
  } catch {
    return rejectWithValue('Failed to toggle progress');
  }
});