import React from "react";
import OrderForm from "../Order/OrderForm";
import OrderRequiresProfileData from "../Order/OrderRequiresProfileData";
import { useSelector } from "react-redux";
import OrderConfirmed from "../Order/OrderConfirmed";

const Order = () => {
  const { addresses } = useSelector((state) => state.addressesList);
  const { route } = useSelector((state) => state.route);

  return route.length ? (
    <OrderConfirmed />
  ) : addresses.length ? (
    <OrderForm />
  ) : (
    <OrderRequiresProfileData />
  );
};

export default Order;
