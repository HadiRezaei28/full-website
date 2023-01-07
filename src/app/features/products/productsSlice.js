import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk("products/get",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
            .then(res => res.data)
        return response
    }
)


const initialState = {
    loading: false,
    data: [],
    error: ""
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.loading = true;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [fetchProducts.rejected]: (state) => {
            state.loading = false;
            state.error = "Something Went wrong";
        }
    }
});

export default productsSlice.reducer;



