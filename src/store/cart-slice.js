import { createSlice } from "@reduxjs/toolkit";
// import { UI_ACTION } from './ui-slice';

const CartSlice = createSlice({
    name: 'cart',
    initialState: {items: [], 
        totalQuantity: 0,
        changed: false
    },
    reducers: {
        addItem(state, action){
            const itemToAdd = action.payload;
            const existingItems = state.items;
            
            state.totalQuantity++;
            state.changed = true;
            const checkItemExists = existingItems.find(item => item.id === itemToAdd.id);
            if (!checkItemExists) {
                state.items.push({ id: itemToAdd.id, 
                        title: itemToAdd.title,
                        price: itemToAdd.price, 
                        quantity: 1, total: itemToAdd.price, 
                        description: itemToAdd.description});
            } else {
                checkItemExists.quantity++;
                checkItemExists.total = checkItemExists.total + checkItemExists.price 
            }
        },

        removeItem(state, action){
            const id = action.payload.id;
            const allItems = state.items;
            const checkItemExists = allItems.find(item => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if (checkItemExists.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            }
            
            if (checkItemExists.quantity > 1) {
                checkItemExists.quantity--;
                checkItemExists.total = checkItemExists.total - checkItemExists.price;
            } 
            
        },

        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        }
    }
})


export const CART_ACTIONS = CartSlice.actions;
export default CartSlice.reducer;