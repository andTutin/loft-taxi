import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { postCardRequestSuccessful, getCardRequestSuccessful } from "./actions";

const card = JSON.parse(localStorage.getItem("card"));

const cardNumber = handleActions(
  {
    [getCardRequestSuccessful]: (state, action) => action.payload.cardNumber,
    [postCardRequestSuccessful]: (state, action) => action.payload.cardNumber,
  },
  card?.cardNumber || null
);

const cardName = handleActions(
  {
    [getCardRequestSuccessful]: (state, action) => action.payload.cardName,
    [postCardRequestSuccessful]: (state, action) => action.payload.cardName,
  },
  card?.cardName || null
);

const expiryDate = handleActions(
  {
    [getCardRequestSuccessful]: (state, action) => action.payload.expiryDate,
    [postCardRequestSuccessful]: (state, action) => action.payload.expiryDate,
  },
  card?.expiryDate || null
);

const cvc = handleActions(
  {
    [getCardRequestSuccessful]: (state, action) => action.payload.cvc,
    [postCardRequestSuccessful]: (state, action) => action.payload.cvc,
  },
  card?.cvc || null
);

export default combineReducers({
  cardNumber,
  cardName,
  expiryDate,
  cvc,
});
