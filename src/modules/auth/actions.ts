import {
  authActions,
  ILoginData,
  IRegistrationData,
  ISessionData,
  LoginRequestAction,
  LoginRequestSuccessfullAction,
  LoginRequestFailedAction,
  RegistrationRequestAction,
  RegistrationRequestSuccessfulAction,
  RegistrationRequestFailedAction,
  LogoutAction,
} from "./types";

export const loginRequest = ({
  email,
  password,
}: ILoginData): LoginRequestAction => ({
  type: authActions.LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const loginRequestSuccessful = ({
  email,
  token,
}: ISessionData): LoginRequestSuccessfullAction => ({
  type: authActions.LOGIN_REQUEST_SUCCESSFUL,
  payload: {
    email,
    token,
  },
});

export const loginRequestFailed = (error: any): LoginRequestFailedAction => ({
  type: authActions.LOGIN_REQUEST_FAILED,
  error,
});

export const registrationRequest = ({
  email,
  password,
  name,
  surname,
}: IRegistrationData): RegistrationRequestAction => ({
  type: authActions.REGISTRATION_REQUEST,
  payload: {
    email,
    password,
    name,
    surname,
  },
});

export const registrationRequestSuccessful = ({
  email,
  token,
}: ISessionData): RegistrationRequestSuccessfulAction => ({
  type: authActions.REGISTRATION_REQUEST_SUCCESSFUL,
  payload: {
    email,
    token,
  },
});

export const registrationRequestFailed = (
  error: any
): RegistrationRequestFailedAction => ({
  type: authActions.REGISTRATION_REQUEST_FAILED,
  error,
});

export const logoutRequest = (): LogoutAction => ({
  type: authActions.LOGOUT,
});
