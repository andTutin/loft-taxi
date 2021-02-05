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
      token
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
