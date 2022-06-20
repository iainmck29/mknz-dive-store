import { createSlice } from "@reduxjs/toolkit"

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        category: 'all'
    },
    reducers: {
        changeCategory(state, action) {
            state.category = action.payload;
        }
    }
})

export const { changeCategory } = categorySlice.actions;

export const selectCategory = state => state.category.category;

export default categorySlice.reducer;