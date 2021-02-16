import React from "react";
import ReactDOM from "react-dom";
import OrderForm from "../pages/MapPage/orderForm";
import FillProfileRequired from "../pages/MapPage/fillProfileRequered";
import OrderConfirmed from "../pages/MapPage/orderConfirmed";
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
  const { loginStatus } = useSelector((state) => state.auth);
  const { addressesList } = useSelector((state) => state);
  const { isLoading } = useSelector((state) => state.helpers);
  const { route } = useSelector((state) => state);

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
        <FillProfileRequired />
      </Paper>
    );
  }

  return loginStatus && !isLoading
    ? ReactDOM.createPortal(modalComponent, modalRoot)
    : null;
};

export default Modal;
