import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAxios from "../../config/axiosConfig";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        isLoading: false,
        hasError: false
    }
})