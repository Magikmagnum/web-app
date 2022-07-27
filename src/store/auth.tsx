import { createSlice } from "@reduxjs/toolkit";


const initialState: { state: boolean } = {
    state: localStorage.getItem('user') === "true" ? true : false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        // path: 'auth/addAuth'
        toggleAuth: (state, action) => {
            state.state = action.payload;
        },
    }
});

export const createToggleAuth = (payload: boolean) => {

    localStorage.setItem('user', payload.toString())

    return {
        type: "auth/toggleAuth",
        payload: payload,
    };
}

export type InitialState = {
    auth: {
        state: boolean
    }
}