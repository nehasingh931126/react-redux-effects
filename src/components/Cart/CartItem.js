import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { CART_ACTIONS } from '../../store/cart-slice';
const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price } = props.item;

  const removeItemHandler = ()=> {
    dispatch(CART_ACTIONS.removeItem({ ...props.item }))
  }

  const addItemHandler = () => {
    dispatch(CART_ACTIONS.addItem({ ...props.item }))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
