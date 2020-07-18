import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControl from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICES = {
  cheese: 0.5,
  bacon: 1,
  salad: 1.5,
  meat: 2
};
class BurgerBuilder extends Component {
  state = {
    Ingredients: {
      cheese: 0,
      bacon: 0,
      salad: 0,
      meat: 0
    },
    totalPrice: 0,
    purchaseable: false,
    purchasing: false
  };
  addIngredientHandler = type => {
    const oldCount = this.state.Ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.Ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      Ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.addPurchaseable(updatedIngredients);
  };
  removeIngredientHandler = type => {
    const oldCount = this.state.Ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.Ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction;
    this.setState({
      Ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.addPurchaseable(updatedIngredients);
  };
  addPurchaseable = Ingredients => {
    const sum = Object.keys(Ingredients)
      .map(igKey => {
        return Ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  };
  purchasehandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseSuccessHandler = () => {
    alert("continuing order");
  };
  render() {
    const disabledInfo = {
      ...this.state.Ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            Ingredients={this.state.Ingredients}
            canceled={this.purchaseCancelHandler}
            success={this.purchaseSuccessHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger Ingredients={this.state.Ingredients} />
        <BuildControl
          addedIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchasehandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
