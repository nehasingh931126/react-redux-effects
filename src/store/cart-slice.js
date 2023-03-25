import { createSlice } from "@reduxjs/toolkit";
import { UI_ACTION } from './ui-slice';

const CartSlice = createSlice({
    name: 'cart',
    initialState: {items: [], totalQuantity: 0},
    reducers: {
        addItem(state, action){
            const itemToAdd = action.payload;
            const existingItems = state.items;
            
            state.totalQuantity++;
            
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
            if (checkItemExists.quantity > 1) {
                checkItemExists.quantity--;
                checkItemExists.total = checkItemExists.total - checkItemExists.price;
            } 
            if (checkItemExists.quantity === 1) {
                state.items = state.items.filter(item=> item.id !== id);
            }
        }
    }
})

export const sendCartData = (cartData)=> {
    return async (dispatch)=> {
        dispatch(UI_ACTION.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));

        const sendRequest = async ()=> {
            const response = await fetch('https://react-custom-hooks-ccf33-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',

                body: JSON.stringify(cartData)
            });
        }

        try {
            await sendRequest();
            dispatch(UI_ACTION.showNotification({
                status: 'success',
                title: 'Success...',
                message: 'Saved the Data'
            }));
        } catch(error) {
            dispatch(UI_ACTION.showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Error in the Cart'
            }));
        }
    }
}
export const CART_ACTIONS = CartSlice.actions;
export default CartSlice.reducer;