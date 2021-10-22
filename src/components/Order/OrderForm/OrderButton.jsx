import React from "react";
import { Button } from "@material-ui/core";

const OrderButton = ({ isDisabled }) => {
  return (
    <Button variant="contained" disabled={isDisabled} type="submit">
      Заказать
    </Button>
  );
};

export default React.memo(OrderButton);
