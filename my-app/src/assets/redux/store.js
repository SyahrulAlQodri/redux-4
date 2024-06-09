import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";

const store = configureStore({
    reducer: {
        products: productSlice
    }
})

export default store;