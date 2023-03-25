import {createSlice} from '@reduxjs/toolkit';

const UISlice = createSlice({
    name: 'ui',
    initialState: {
        cartIsVisible: true, 
        notification:null
    },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status:action.payload.status,
                title:action.payload.title,
                message: action.payload.message
            };
        }
    }
});
export const UI_ACTION = UISlice.actions;
export default UISlice.reducer;



