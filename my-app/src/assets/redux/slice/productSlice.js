import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    loading: false,
    error: null
};

export const fetchProduct = createAsyncThunk("products/fetchProduct", async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProductsRequest: (state) => {
            state.loading = true;
        },
        getProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        getProductsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default productsSlice.reducer;
export const { getProductsRequest, getProductsSuccess, getProductsFailure } = productsSlice.actions