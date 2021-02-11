import { createAction } from "redux-actions";
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESSFUL,
  LOGIN_REQUEST_FAILED,
  REGISTRATION_REQUEST,
  REGISTRATION_REQUEST_SUCCESSFUL,
  REGISTRATION_REQUEST_FAILED,
  POST_CARD_REQUEST,
  POST_CARD_REQUEST_SUCCESSFUL,
  POST_CARD_REQUEST_FAILED,
  GET_CARD_REQUEST,
  GET_CARD_REQUEST_SUCCESSFUL,
  GET_CARD_REQUEST_FAILED,
  LOGOUT_BUTTON_PRESSED,
  LOGOUT,
  LOADING_START,
  LOADING_DONE,
  PROFILE_OPEN,
  PROFILE_CLOSE,
  ADDRESSES_LIST_REQUEST,
  ADDRESSES_LIST_REQUEST_SUCCESSFUL,
  ADDRESSES_LIST_REQUEST_FAILED,
  ROUTE_REQUEST,
  ROUTE_REQUEST_SUCCESSFUL,
  ROUTE_REQUEST_FAILED,
  ROUTE_RESET,
} from "./constants";

export const loginRequest = createAction(LOGIN_REQUEST);
export const loginRequestSuccessful = createAction(LOGIN_REQUEST_SUCCESSFUL);
export const loginRequestFailed = createAction(LOGIN_REQUEST_FAILED);

export const registrationRequest = createAction(REGISTRATION_REQUEST);
export const registrationRequestSuccessful = createAction(
  REGISTRATION_REQUEST_SUCCESSFUL
);
export const registrationRequestFailed = createAction(
  REGISTRATION_REQUEST_FAILED
);

export const postCardRequest = createAction(POST_CARD_REQUEST);
export const postCardRequestSuccessful = createAction(
  POST_CARD_REQUEST_SUCCESSFUL
);
export const postCardRequestFailed = createAction(POST_CARD_REQUEST_FAILED);

export const getCardRequest = createAction(GET_CARD_REQUEST);
export const getCardRequestSuccessful = createAction(
  GET_CARD_REQUEST_SUCCESSFUL
);
export const getCardRequestFailed = createAction(GET_CARD_REQUEST_FAILED);

export const logoutButtonPressed = createAction(LOGOUT_BUTTON_PRESSED);
export const logout = createAction(LOGOUT);

export const loadingStart = createAction(LOADING_START);
export const loadingDone = createAction(LOADING_DONE);

export const profileOpen = createAction(PROFILE_OPEN);
export const profileClose = createAction(PROFILE_CLOSE);

export const addressesListRequest = createAction(ADDRESSES_LIST_REQUEST);
export const addressesListRequestSuccessful = createAction(
  ADDRESSES_LIST_REQUEST_SUCCESSFUL
);
export const addressesListRequestFailed = createAction(
  ADDRESSES_LIST_REQUEST_FAILED
);

export const routeRequest = createAction(ROUTE_REQUEST);
export const routeRequestSuccessful = createAction(ROUTE_REQUEST_SUCCESSFUL);
export const routeRequestFailed = createAction(ROUTE_REQUEST_FAILED);
export const routeReset = createAction(ROUTE_RESET);
