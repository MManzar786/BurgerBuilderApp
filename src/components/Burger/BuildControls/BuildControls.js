import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Cheese", type: "cheese" },
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" }
];
const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price : <strong>{props.price} $</strong>{" "}
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.addedIngredient(ctrl.type)}
        remove={() => props.removeIngredient(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
