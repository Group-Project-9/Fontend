import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        updateUserStart: (state) => {
            state.loading = true;
        }
        ,
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        
        },
        signOutUserStart: (state) => {
            state.loading = true;
        }
        ,
        signOutUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signOutUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        
        },
    }
})

export const { 
    loginRequest, 
    loginSuccess, 
    loginFailure, 
    updateUserSuccess, 
    updateUserFailure, 
    updateUserStart,
    signOutUserStart,
    signOutUserSuccess,
    signOutUserFailure
 } = userSlice.actions;

export default userSlice.reducer;