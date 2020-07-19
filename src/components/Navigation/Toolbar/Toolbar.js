import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Navigation from "../NavigationItems/NavigationItems";
import Button from "../../UI/Button/Button";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Button clicked={props.open}>
        <div className={classes.Line}></div>
        <div className={classes.Line}></div>
        <div className={classes.Line}></div>
      </Button>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <Navigation />
      </nav>
    </header>
  );
};
export default Toolbar;
