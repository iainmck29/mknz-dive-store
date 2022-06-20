import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAxios from "../../config/axiosConfig";

export const fetchCurrentUser = createAsyncThunk('users/fetchCurrentUser', async (id, thunkAPI) => {
    const response = await apiAxios.get(`/users/${id}`, {withCredentials: true});
    return response.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: {},
        currentUserStatus: 'idle',
        isLoggedIn: false
    },
    reducers: {
        updateIsLoggedIn(state, action) {
            state.isLoggedIn = action.payload
        },
        updateCurrentUser(state, action) {
            state.currentUser = action.payload
        },
        updateCurrentUserStatus(state, action) {
            state.currentUserStatus = action.payload
        }
    },
    extraReducers: {
        [fetchCurrentUser.pending]: (state, action) => {
            state.currentUserStatus = 'loading'
        },
        [fetchCurrentUser.fulfilled]: (state, action) => {
            state.currentUserStatus = 'succeeded'
            state.currentUser = action.payload
        },
        [fetchCurrentUser.rejected]: (state, action) => {
            state.currentUserStatus = 'failed'
        }
    }
})

export const {
    updateIsLoggedIn,
    updateCurrentUser,
    updateCurrentUserStatus
} = userSlice.actions;

export const selectCurrentUser = state => state.users.currentUser;
export const selectCurrentUserID = state => state.users.currentUser.id;
export const selectCurrentUserStatus = state=> state.users.currentUserStatus;
export const selectIsLoggedIn = state => state.users.isLoggedIn;
export default userSlice.reducer;