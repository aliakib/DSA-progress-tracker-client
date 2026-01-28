import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient, { api } from '../../services/apiClient';
import type { User } from './auth.types';

interface LoginPayload {
  email: string;
  password: string;
}

export const login = createAsyncThunk<
  User,
  LoginPayload,
  { rejectValue: string }
>('auth/login', async (payload, { rejectWithValue }) => {
  try {
    const res = await api.post<{ token: string; user: User }, LoginPayload>(
      '/auth/login',
      payload
    );

    localStorage.setItem('token', res.data.token);
    return res.data.user;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || 'Login failed'
    );
  }
});

export const hydrateAuth = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>('auth/hydrate', async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return rejectWithValue('No token');
    }

    // Backend endpoint that returns logged-in user
    const { data } = await apiClient.get('/auth/me');

    return data.data as User;
  } catch {
    localStorage.removeItem('token');
    return rejectWithValue('Session expired');
  }
});
