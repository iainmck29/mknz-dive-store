import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAxios from "../../config/axiosConfig";

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {
    try {
        const payload = await apiAxios.get('/products')
        return payload.data;
    } catch (err) {
        console.log(err)
        return
    }

})

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [fetchAllProducts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchAllProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.products = action.payload;
        },
        [fetchAllProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
    }
}
})

export const selectProducts = (state) => {
    return state.products.products;
};

export const selectLoadingProducts = state => {
    return state.products.isLoading;
};

export const selectErrorLoadingProducts = state => {
    return state.products.hasError;
};

export default productsSlice.reducer;