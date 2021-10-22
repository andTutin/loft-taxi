import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Order from "../Order";
import { useLocation } from "react-router-dom";
import Profile from "../Profile/";

const useStyles = makeStyles((theme) => ({
  blockWrapper: {
    position: "absolute",
    top: "150px",
    left: "20px",
    padding: "19px",
    zIndex: "110",
    width: "550px",
  },
}));

const modalRoot = document.getElementById("modal-root");

const Modal = () => {
  const location = useLocation();
  const classes = useStyles();

  return ReactDOM.createPortal(
    <Paper className={classes.blockWrapper}>
      {location.pathname.endsWith("order") ? <Order /> : <Profile />}
    </Paper>,
    modalRoot
  );
};

export default Modal;
