import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddItem: (state, action) => {
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                });
                return {
                    ...state,
                    selectedItems: [...state.selectedItems]
                }
            }
        },
        RemoveItem: (state, action) => {
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems]
            }
        },
        Increase: (state, action) => {
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state
            }
        },
        Decrease: (state, action) => {
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state
            }
        },
        Checkout: () => {
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }
        },
        Clear: () => {
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false
            }
        }
    }
})


export const {AddItem, RemoveItem, Increase, Decrease, Checkout, Clear} = cartSlice.actions;
export default cartSlice.reducer;