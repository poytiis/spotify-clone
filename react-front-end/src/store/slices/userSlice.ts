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
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
        },
        logOut: (state) => {
           state.email = '';
           state.firstName = '';
           state.lastName = '';
        }
    }
});

export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
