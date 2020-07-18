import React from "react";
import burgerLogo from "../../assets/images/bugerLogo.png";
import classes from "./Logo.module.css";
const logo = props => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="myburger" />
    </div>
  );
};

export default logo;
