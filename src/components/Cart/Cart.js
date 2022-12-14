import CartModal from "../UI/Modal/CartModal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import Cartcontext from "../../store/cart-context";


const Cart = (props) => {
  const cartCtx = useContext(Cartcontext);
  console.log(cartCtx.totalAmount)
  const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <CartModal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total:</span>
        <span>£{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onHideCart}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </CartModal>
  );
};

export default Cart;
