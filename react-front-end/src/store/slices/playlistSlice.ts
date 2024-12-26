import { createSlice } from '@reduxjs/toolkit';

interface PlaylistInfo {
  id: number;
  name: string;
  description: string;
}

const initialState = {
  playlists: [] as PlaylistInfo[]
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setPLaylists: (state, action) => {
      state.playlists = action.payload
    }
  }
});

export const { setPLaylists } = playlistSlice.actions;
export default playlistSlice.reducer;
