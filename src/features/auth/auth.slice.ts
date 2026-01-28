import { createSlice } from '@reduxjs/toolkit';
import type { AuthState } from './auth.types';
import { login } from './auth.thunks';
import { hydrateAuth } from './auth.thunks';

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  initialized: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Login failed';
      })

      // HYDRATE
      .addCase(hydrateAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(hydrateAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.initialized = true;
      })
      .addCase(hydrateAuth.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.initialized = true;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
