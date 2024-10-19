import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

export const rootStore = configureStore({
  reducer: {
    user: userSlice,
  }
});
