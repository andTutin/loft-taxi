export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESSFUL = "LOGIN_REQUEST_SUCCESSFUL";
export const LOGIN_REQUEST_FAILED = "LOGIN_REQUEST_FAILED";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_REQUEST_SUCCESSFUL =
  "REGISTRATION_REQUEST_SUCCESSFUL";
export const REGISTRATION_REQUEST_FAILED = "REGISTRATION_REQUEST_FAILED";
export const LOGOUT = "LOGOUT";

export const loginRequest = ({ email, password }) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const loginRequestSuccessful = ({ email, token }) => ({
  type: LOGIN_REQUEST_SUCCESSFUL,
  payload: {
    email,
    token,
  },
});

export const loginRequestFailed = (error) => ({
  type: LOGIN_REQUEST_FAILED,
  error,
});

export const registrationRequest = ({ email, password, name, surname }) => ({
  type: REGISTRATION_REQUEST,
  payload: {
    email,
    password,
    name,
    surname,
  },
});

export const registrationRequestSuccessful = ({ email, token }) => ({
  type: REGISTRATION_REQUEST_SUCCESSFUL,
  payload: {
    email,
    token,
  },
});

export const registrationRequestFailed = (error) => ({
  type: REGISTRATION_REQUEST_FAILED,
  error,
});

export const logoutRequest = () => ({
  type: LOGOUT,
});
