import { createSlice } from "@reduxjs/toolkit";


const initialState: { state: string | null | boolean } = {
    state: localStorage.getItem('user') !== "false" ? localStorage.getItem('user') : false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        // path: 'auth/addAuth'
        toggleAuth: (state, action) => {
            localStorage.setItem('user', action.payload.toString())
            state.state = action.payload;
        },
    }
});


export const { toggleAuth } = authSlice.actions;


export type InitialState = {
    auth: {
        state: string | null | boolean
    }
}