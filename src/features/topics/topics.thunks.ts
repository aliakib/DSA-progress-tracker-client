import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../services/apiClient';
import type { Topic } from './topics.types';

export const fetchTopics = createAsyncThunk<
  Topic[],
  void,
  { rejectValue: string }
>('topics/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const { data } = await apiClient.get('/topics');
    return data.data as Topic[];
  } catch {
    return rejectWithValue('Failed to fetch topics');
  }
});