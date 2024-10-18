import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: '',
    lastName: '',
    email: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.lastName = action.payload.lastName,
            state.email = action.payload.email
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;