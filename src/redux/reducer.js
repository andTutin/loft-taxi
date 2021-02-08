import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  loginRequestSuccessful,
  loginRequestFailed,
  registrationRequestSuccessful,
  registrationRequestFailed,
  postCardRequestSuccessful,
  postCardRequestFailed,
  getCardRequestSuccessful,
  getCardRequestFailed,
  logout,
  setIsLoading,
  setIsProfileOpened,
  addressesListRequestSuccessful,
} from "./actions";

const session = JSON.parse(localStorage.getItem("session"));
const card = JSON.parse(localStorage.getItem("card"));
const addresses = JSON.parse(localStorage.getItem("addresses"));

const loginStatus = handleActions(
  {
    [loginRequestSuccessful]: () => true,
    [loginRequestFailed]: () => false,
    [registrationRequestSuccessful]: () => true,
    [registrationRequestFailed]: () => false,
    [logout]: () => false,
  },
  session?.loginStatus || false
);

const token = handleActions(
  {
    [loginRequestSuccessful]: (state, action) => action.payload.token,
    [registrationRequestSuccessful]: (state, action) => action.payload.token,
  },
  session?.token || null
);

const email = handleActions(
  {
    [loginRequestSuccessful]: (state, action) => action.payload.email,
    [registrationRequestSuccessful]: (state, action) => action.payload.email,
  },
  session?.email || null
);

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

const error = handleActions(
  {
    [loginRequestFailed]: (state, action) => action.payload,
    [registrationRequestFailed]: (state, action) => action.payload,
    [getCardRequestFailed]: (state, action) => action.payload,
    [postCardRequestFailed]: (state, action) => action.payload,
  },
  null
);

const isCanOrder = handleActions(
  {
    [getCardRequestSuccessful]: () => true,
    [getCardRequestFailed]: () => false,
    [postCardRequestSuccessful]: () => true,
    [postCardRequestFailed]: () => false,
  },
  card ? true : false
);

const isLoading = handleActions(
  {
    [setIsLoading]: (state, action) => action.payload,
    //
  },
  false
);

const isProfileOpened = handleActions(
  {
    [setIsProfileOpened]: (state, action) => action.payload,
  },
  true
);

const addressesList = handleActions(
  {
    [addressesListRequestSuccessful]: (state, action) => action.payload,
  },
  addresses || []
);

export default combineReducers({
  loginStatus,
  token,
  email,
  cardNumber,
  cardName,
  expiryDate,
  cvc,
  error,
  isCanOrder,
  isLoading,
  isProfileOpened,
  addressesList,
});
