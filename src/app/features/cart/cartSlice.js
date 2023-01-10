import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

const funcItemsCounter = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    return itemsCounter;
}

const funcTotal = items => {
    const total = items.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2);
    return total;
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
                state.selectedItems = [...state.selectedItems];
                state.itemsCounter = funcItemsCounter(state.selectedItems);
                state.total = funcTotal(state.selectedItems);
                state.checkout = false
            }
        },
        RemoveItem: (state, action) => {
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            state.selectedItems = [...newSelectedItems];
            state.itemsCounter = funcItemsCounter(state.selectedItems);
            state.total = funcTotal(state.selectedItems);
        },
        Increase: (state, action) => {
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            state.itemsCounter = funcItemsCounter(state.selectedItems);
            state.total = funcTotal(state.selectedItems);
        },
        Decrease: (state, action) => {
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            state.itemsCounter = funcItemsCounter(state.selectedItems);
            state.total = funcTotal(state.selectedItems);
        },
        Checkout: (state) => {
            state.selectedItems = [];
            state.itemsCounter = 0;
            state.total = 0;
            state.checkout = true
        },
        Clear: (state) => {
            state.selectedItems = [];
            state.itemsCounter = 0;
            state.total = 0;
            state.checkout = false
        }
    }
})


export const { AddItem, RemoveItem, Increase, Decrease, Checkout, Clear } = cartSlice.actions;
export default cartSlice.reducer;