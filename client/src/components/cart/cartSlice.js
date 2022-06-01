import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAxios from "../../config/axiosConfig";

export const fetchCurrentCart = createAsyncThunk('cart/fetchCurrentCart', async () => {
    const payload = await apiAxios.get('cart/:id')
    return payload.data
    //Need to return products in cart rather than the cart id?
})

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {

    }
})