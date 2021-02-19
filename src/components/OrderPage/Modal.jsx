import React from "react";
import ReactDOM from "react-dom";
import { OrderForm } from "./OrderForm";
import OrderRequiresProfileData from "./OrderRequiresProfileData";
import OrderConfirmed from "./OrderConfirmed";
import { useAuth } from "../../modules/auth";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

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
let modalComponent;

const Modal = () => {
  const classes = useStyles();
  const { token } = useAuth();
  const { addressesList, route } = useSelector((state) => state);
  const { isLoading } = useSelector((state) => state.flags);

  if (route.length) {
    modalComponent = (
      <Paper className={classes.blockWrapper}>
        <OrderConfirmed />
      </Paper>
    );
  } else if (addressesList.length) {
    modalComponent = (
      <Paper className={classes.blockWrapper}>
        <OrderForm />
      </Paper>
    );
  } else {
    modalComponent = (
      <Paper className={classes.blockWrapper}>
        <OrderRequiresProfileData />
      </Paper>
    );
  }

  return token && !isLoading
    ? ReactDOM.createPortal(modalComponent, modalRoot)
    : null;
};

export default Modal;
