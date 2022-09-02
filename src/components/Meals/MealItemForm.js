import classes from "./MealItemForm.module.css";
import Input from "../UI/Cards/Input";
import React from "react";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNo = +enteredAmount;
    
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNo < 1 ||
      enteredAmountNo > 5
    ) {
      setFormIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNo);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!formIsValid && <p>Please Enter a Valid Amout</p>}
    </form>
  );
};

export default MealItemForm;
