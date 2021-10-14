import { POST_CARD_REQUEST_SUCCESSFUL } from ".";
import {
  GET_CARD_REQUEST_FAILED,
  GET_CARD_REQUEST_SUCCESSFUL,
  POST_CARD_REQUEST_FAILED,
} from "./actions";
import { LOGOUT } from "../auth";
const initialState = {
  cardNumber: null,
  cardName: null,
  cvc: null,
  expiryDate: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARD_REQUEST_SUCCESSFUL:
      return {
        ...state,
        cardNumber: action.payload.cardNumber,
        cardName: action.payload.cardName,
        expiryDate: action.payload.expiryDate,
        cvc: action.payload.cvc,
      };

    case GET_CARD_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };

    case POST_CARD_REQUEST_SUCCESSFUL:
      return {
        ...state,
        cardNumber: action.payload.cardNumber,
        cardName: action.payload.cardName,
        expiryDate: action.payload.expiryDate,
        cvc: action.payload.cvc,
      };

    case POST_CARD_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };

    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
