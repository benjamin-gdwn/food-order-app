import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import Cartcontext from "../../store/cart-context";

const HeaderCartButton = (props) => {

  const cartCtx = useContext(Cartcontext);

  const numberOfCartItems = cartCtx.items.reduce((currentNo, item) => {
      return currentNo + item.amount;
  }, 0)

  console.log(cartCtx.totalAmount)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
