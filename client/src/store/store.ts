import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../components/login/userSlice";
import productsSliceReducer from "../components/products/productsSlice";


export const store = configureStore({
    reducer: {
        products: productsSliceReducer,
        users: userSliceReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch