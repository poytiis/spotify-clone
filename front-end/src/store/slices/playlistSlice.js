import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    playlists: [],
};

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
       emptyPlaylist: (state) => {
        state.playlists = [];
       }
    }
});

export const { emptyPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;