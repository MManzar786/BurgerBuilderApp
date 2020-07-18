import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const OrderIngredient = Object.keys(props.Ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.Ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Here's your order:</h3>
      <p>Your ingrdients are:</p>
      <ul>{OrderIngredient}</ul>
      <p>Price: {props.price}</p>
      <Button clicked={props.canceled} btnType={"Danger"}>
        Cancel
      </Button>
      <Button clicked={props.success} btnType={"Success"}>
        Coutinue
      </Button>
    </Aux>
  );
};

export default orderSummary;
