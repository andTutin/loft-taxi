export function postLoginRequest(email, password) {
  return {
    type: "POST_LOGIN_REQUEST",
    payload: {
      email,
      password,
    },
  };
}

export function postLoginSuccess(email, token) {
  return {
    type: "POST_LOGIN_SUCCESS",
    payload: {
      email,
      token,
    },
  };
}

export function postLoginFailure(error) {
  return {
    type: "POST_LOGIN_FAILURE",
    payload: {
      error,
    },
  };
}

export function postRegistrationRequest(email, password, name, surname) {
  return {
    type: "POST_REGISTRATION_REQUEST",
    payload: {
      email,
      password,
      name,
      surname,
    },
  };
}

export function postRegistrationSuccess(name, surname, email, token) {
  return {
    type: "POST_REGISTRATION_SUCCESS",
    payload: {
      name,
      surname,
      email,
      token,
    },
  };
}

export function postRegistrationFailure(error) {
  return {
    type: "POST_REGISTRATION_FAILURE",
    payload: {
      error,
    },
  };
}

export function logoutButtonPressed() {
  return {
    type: "LOGOUT_BUTTON_PRESSED",
  };
}

export function logout() {
  return {
    type: "LOGOUT",
  };
}
