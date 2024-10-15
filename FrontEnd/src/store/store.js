import { configureStore } from '@reduxjs/toolkit';
import userSlice  from './slices/userSlice';
import playlistSlice from './slices/playlistSlice';

export const rootStore = configureStore({
  reducer: {
    user: userSlice,
    playlist: playlistSlice
  }
});
