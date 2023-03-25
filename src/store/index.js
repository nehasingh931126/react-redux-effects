import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "./ui-slice";
import CartReducer from './cart-slice';
const store = configureStore({
    reducer: { uiReducer: UIReducer, cartReducer: CartReducer}
})

export default store;

