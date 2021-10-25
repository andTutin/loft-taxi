import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../auth";
import { postCardRequest } from ".";
import { CardData } from "./types";

export const usePayment = () => {
  const dispatch = useDispatch();
  const { token } = useAuth();

  const { cardNumber, cardName, expiryDate, cvc }: CardData = useSelector(
    (state: any) => state.payment
  );

  const sendCard = ({ cardNumber, cardName, expiryDate, cvc } : CardData) => {
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
