import { createSlice } from '@reduxjs/toolkit';
import { create } from 'domain';


const initialState = {
  isPLaying: false,
  volumePercentage: 50,
  isSuffleOn: false,
  queue: []
};

const playBarSlice = createSlice({
  name: 'playBar',
  initialState,
  reducers: {
    toggleIsPLaying: (action) => {
      action.isPLaying = !action.isPLaying
    }
  }
});

export const { toggleIsPLaying } = playBarSlice.actions;
export default playBarSlice.reducer;