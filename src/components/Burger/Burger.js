import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";
const burger = props => {
  // const dummy = Object.entries(props.Ingredients);
  // console.log(dummy);
  // docs of default JS array functions
  const transformedIngredients = Object.keys(props.Ingredients).map(igKey => {
    // console.log(props.Ingredients);
    // confusion + complex

    return [...Array(props.Ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
