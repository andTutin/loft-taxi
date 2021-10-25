import { paymentActions } from "./types";

export interface PaymentState {
  cardNumber: string | null;
  cardName: string | null;
  cvc: string | number | null;
  expiryDate: string | null;
  error: string | null;
}
const initialState: PaymentState = {
  cardNumber: null,
  cardName: null,
  cvc: null,
  expiryDate: null,
  error: null,
};

const reducer = (
  state: PaymentState = initialState,
  action: any
): PaymentState => {
  switch (action.type) {
    case paymentActions.GET_CARD_REQUEST_SUCCESSFUL:
      return {
        ...state,
        cardNumber: action.payload.cardNumber,
        cardName: action.payload.cardName,
        expiryDate: action.payload.expiryDate,
        cvc: action.payload.cvc,
      };

    case paymentActions.GET_CARD_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };

    case paymentActions.POST_CARD_REQUEST_SUCCESSFUL:
      return {
        ...state,
        cardNumber: action.payload.cardNumber,
        cardName: action.payload.cardName,
        expiryDate: action.payload.expiryDate,
        cvc: action.payload.cvc,
      };

    case paymentActions.POST_CARD_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
