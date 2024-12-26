import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import playlistSlice from './slices/playlistSlice';
import { useDispatch } from 'react-redux';

export const rootStore = configureStore({
  reducer: {
    user: userSlice,
    playlist: playlistSlice
  }
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
