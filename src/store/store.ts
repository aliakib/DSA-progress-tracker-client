import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/auth.slice';
import topicsReducer from '../features/topics/topics.slice';
import progressReducer from '../features/progress/progress.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    topics: topicsReducer,
    progress: progressReducer,
  },
});

// 🔹 Types for hooks & thunks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;