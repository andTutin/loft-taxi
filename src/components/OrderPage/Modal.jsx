import React from "react";
import ReactDOM from "react-dom";
import OrderForm from "./OrderForm";
import OrderRequiresProfileData from "./OrderRequiresProfileData";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import OrderConfirmed from "./OrderConfirmed";

const useStyles = makeStyles((theme) => ({
  blockWrapper: {
    position: "fixed",
    top: "200px",
    left: "50px",
    padding: "40px",
    zIndex: "110",
    boxSizing: "border-box",
  },
}));

const modalRoot = document.getElementById("modal-root");

const Modal = () => {
  const classes = useStyles();
  const { addresses } = useSelector((state) => state.addressesList);
  const { route } = useSelector((state) => state.route);

  return route.length
    ? ReactDOM.createPortal(
        <Paper className={classes.blockWrapper}>
          <OrderConfirmed />
        </Paper>,
        modalRoot
      )
    : addresses.length
    ? ReactDOM.createPortal(
        <Paper className={classes.blockWrapper}>
          <OrderForm />
        </Paper>,
        modalRoot
      )
    : ReactDOM.createPortal(
        <Paper className={classes.blockWrapper}>
          <OrderRequiresProfileData />
        </Paper>,
        modalRoot
      );
};

export default Modal;
