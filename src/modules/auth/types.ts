export enum authActions {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_REQUEST_SUCCESSFUL = "LOGIN_REQUEST_SUCCESSFUL",
  LOGIN_REQUEST_FAILED = "LOGIN_REQUEST_FAILED",
  REGISTRATION_REQUEST = "REGISTRATION_REQUEST",
  REGISTRATION_REQUEST_SUCCESSFUL = "REGISTRATION_REQUEST_SUCCESSFUL",
  REGISTRATION_REQUEST_FAILED = "REGISTRATION_REQUEST_FAILED",
  LOGOUT = "LOGOUT",
}

export interface ILoginData {
  email: string;
  password: string | number;
}

export interface ISessionData {
  email: string;
  token: string;
}

export interface IRegistrationData extends ILoginData {
  name?: string;
  surname?: string;
}

export type LoginRequestAction = {
  type: typeof authActions.LOGIN_REQUEST;
  payload: ILoginData;
};

export type LoginRequestSuccessfullAction = {
  type: typeof authActions.LOGIN_REQUEST_SUCCESSFUL;
  payload: ISessionData;
};

export type LoginRequestFailedAction = {
  type: typeof authActions.LOGIN_REQUEST_FAILED;
  error: any;
};

export type RegistrationRequestAction = {
  type: typeof authActions.REGISTRATION_REQUEST;
  payload: IRegistrationData;
};

export type RegistrationRequestSuccessfulAction = {
  type: typeof authActions.REGISTRATION_REQUEST_SUCCESSFUL;
  payload: ISessionData;
};

export type RegistrationRequestFailedAction = {
  type: typeof authActions.REGISTRATION_REQUEST_FAILED;
  error: any;
};

export type LogoutAction = {
  type: typeof authActions.LOGOUT;
};

export type AuthAction =
  | LoginRequestSuccessfullAction
  | LoginRequestFailedAction
  | RegistrationRequestSuccessfulAction
  | RegistrationRequestFailedAction
  | LogoutAction;
