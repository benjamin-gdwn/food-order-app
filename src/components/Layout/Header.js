import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Ben's Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt="Meals laid out on a table" />
      </div>
    </React.Fragment>
  );
};

export default Header;
