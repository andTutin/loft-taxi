import React from "react";
import OrderForm from "../Order/OrderForm";
import OrderRequiresProfileData from "../Order/OrderRequiresProfileData";
import { useSelector } from "react-redux";
import OrderConfirmed from "../Order/OrderConfirmed";

const Order = () => {
  const { route } = useSelector((state) => state.route);
  const { cardNumber } = useSelector((state) => state.payment);

  return route.length ? (
    <OrderConfirmed />
  ) : cardNumber ? (
    <OrderForm />
  ) : (
    <OrderRequiresProfileData />
  );
};

export default Order;
