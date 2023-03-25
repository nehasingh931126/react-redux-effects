import Cart from './components/Cart/Cart';
import React from 'react'
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { UI_ACTION } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { Fragment } from 'react';

let isInitial=  true;

function App() {
  const showCart = useSelector((state) => state.uiReducer.cartIsVisible);
  const cartReducer = useSelector((state) => state.cartReducer);
  const notification = useSelector((state)=> state.uiReducer.notification);
  const dispatch = useDispatch();

  useEffect(()=> {
    const newFunction = async ()=> {
      dispatch(UI_ACTION.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }));
      const response = await fetch('https://react-custom-hooks-ccf33-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',

        body: JSON.stringify(cartReducer)
      });
      if (!response.ok){
        throw new Error("here is the Error");
      }
      dispatch(
        UI_ACTION.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully'
        }
      ));
      
      // const reponseData = await response.json();      
    }   

    if(isInitial) {
      isInitial = false;
      return;
    }
    newFunction().catch((error) => {
      UI_ACTION.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data fail'
      })
    })
  }, [cartReducer, dispatch]);

  useSelector((state)=>state.cart)
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
    <Layout>
      {showCart && <Cart />}
      <Products />
      
    </Layout>
    </Fragment>
  );
}

export default App;
