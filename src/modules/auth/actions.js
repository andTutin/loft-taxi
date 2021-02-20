import { createAction } from "redux-actions";

const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_REQUEST_SUCCESSFUL = "LOGIN_REQUEST_SUCCESSFUL";
const LOGIN_REQUEST_FAILED = "LOGIN_REQUEST_FAILED";

const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
const REGISTRATION_REQUEST_SUCCESSFUL = "REGISTRATION_REQUEST_SUCCESSFUL";
const REGISTRATION_REQUEST_FAILED = "REGISTRATION_REQUEST_FAILED";
const LOGOUT_BUTTON_PRESSED = "LOGOUT_BUTTON_PRESSED";
const LOGOUT = "LOGOUT";

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

export const logoutButtonPressed = createAction(LOGOUT_BUTTON_PRESSED);
export const logout = createAction(LOGOUT);
