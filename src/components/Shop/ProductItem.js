import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { CART_ACTIONS } from '../../store/cart-slice';

const ProductItem = (props) => {
  const cartActionDispatch = useDispatch();
  const { id, title, price, description } = props;
  const addToCartHandler = ()=> {
    cartActionDispatch(CART_ACTIONS.addItem({ id, price, title, description}))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
