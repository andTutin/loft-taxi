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
  loadingStart,
  loadingDone,
  addressesListRequestSuccessful,
  routeRequestSuccessful,
  routeRequestFailed,
  profileOpen,
  profileClose,
  routeReset,
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

const isLoading = handleActions(
  {
    [loadingStart]: () => true,
    [loadingDone]: () => false,
  },
  false
);

const isProfileOpened = handleActions(
  {
    [profileOpen]: () => true,
    [profileClose]: () => false,
  },
  true
);

const addressesList = handleActions(
  {
    [addressesListRequestSuccessful]: (state, action) => action.payload,
  },
  addresses || []
);

const isReorder = handleActions(
  {
    [routeRequestSuccessful]: () => true,
    [routeRequestFailed]: () => false,
    [logout]: () => false,
    [routeReset]: () => false,
  },
  false
);

const coords = handleActions(
  {
    [routeRequestSuccessful]: (state, action) => action.payload,
    [routeRequestFailed]: () => [],
    [routeReset]: () => [],
    [logout]: () => [],
  },
  []
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
  isLoading,
  isProfileOpened,
  addressesList,
  isReorder,
  coords,
});
