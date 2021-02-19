import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../auth";
import { postCardRequest } from "../../modules/payment";

export const usePayment = () => {
  const dispatch = useDispatch();
  const { token } = useAuth();

  const { cardNumber, cardName, expiryDate, cvc } = useSelector(
    (state) => state.payment
  );

  const sendCard = ({ cardNumber, cardName, expiryDate, cvc }) => {
    dispatch(
      postCardRequest({
        cardNumber,
        cardName,
        expiryDate,
        cvc,
        token,
      })
    );
  };

  return { cardNumber, cardName, expiryDate, cvc, sendCard };
};
