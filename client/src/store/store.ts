import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../components/login/userSlice";
import productsSliceReducer from "../components/products/productsSlice";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import cartSliceReducer from "../components/cart/cartSlice";
import categorySliceReducer from "../components/categories/categorySlice";

const persistConfig = {
    key: 'root',
    storage,
  }

const persistCartConfig = {
    key: 'cart',
    storage,
}

  const persistedUserReducer = persistReducer(persistConfig, userSliceReducer)
  const persistedCartReducer = persistReducer(persistCartConfig, cartSliceReducer)


export const store = configureStore({
    reducer: {
        products: productsSliceReducer,
        users: persistedUserReducer,
        cart: persistedCartReducer,
        category: categorySliceReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch