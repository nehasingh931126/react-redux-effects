import { UI_ACTION } from './ui-slice';
import { CART_ACTIONS } from './cart-slice';
export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-custom-hooks-ccf33-default-rtdb.firebaseio.com/cart.json')

            if (!response.ok) {
                throw new Error("The Action cannot be completed");
            }

            return response.json();
        }

        try {
            const result = await fetchData();
            dispatch(CART_ACTIONS.replaceCart(result));
        } catch(error) {
            dispatch(UI_ACTION.showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Error Saving Data'
            }));
        }
    }
}

export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(UI_ACTION.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));

        const sendRequest = async () => {
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
        } catch (error) {
            dispatch(UI_ACTION.showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Error in the Cart'
            }));
        }
    }
}