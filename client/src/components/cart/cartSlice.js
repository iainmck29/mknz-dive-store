import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAxios from "../../config/axiosConfig";


export const setCartID = createAsyncThunk('cart/setCartID', async (userID) => {
    const cart = await apiAxios.get(`/cart/${userID}`)
    if (cart.data) {
        return cart.data.id
    } else {
        let newCart = await apiAxios.post('/cart/new-cart', {
            user_id: userID
        })
        return newCart.data.id;
    }
})

export const refreshCart = createAsyncThunk('cart/refreshCart', async (cartID) => {
    try {
        const payload = await apiAxios.get(`/cart/${cartID}/get-products`);
        return payload.data
    } catch (error) {
        console.log(error)
        return
    }
})

export const getCartTotal = createAsyncThunk('cart/getCartTotal', async (cartID) => {
    try {
        const payload = await apiAxios.get(`/cart/${cartID}/total`);
        return payload.data.total
    } catch (error) {
        console.log(error);
        return
    }
})

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        isLoading: false,
        hasError: false,
        cartID: null,
        total: null
    },
    reducers: {
        clearCartState: (state, action) => {
            state.cart = action.payload;
            state.cartID = null;
            state.total = null;
        },
        removeFromCart: (state, action) => {
            state.cart.filter(product => product.product_id !== action.payload)
        }
    },
    extraReducers: {
        [setCartID.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [setCartID.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.cartID = action.payload;
        },
        [setCartID.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },


        [refreshCart.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [refreshCart.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.cart = action.payload;
        },
        [refreshCart.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },

        [getCartTotal.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getCartTotal.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.total = action.payload;
        },
        [getCartTotal.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectCartID = state => state.cart.cartID;
export const selectCartTotal = state => state.cart.total;
export const { clearCartState, removeFromCart } = cartSlice.actions;
export const selectCurrentCart = state => state.cart.cart;
export default cartSlice.reducer;