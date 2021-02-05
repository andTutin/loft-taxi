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

export function postCardRequest(cardNumber, expiryDate, cardName, cvc, token) {
  return {
    type: "POST_CARD_REQUEST",
    payload: {
      cardNumber,
      expiryDate,
      cardName,
      cvc,
      token,
    },
  };
}

export function postCardSuccess(cardNumber, expiryDate, cardName, cvc) {
  return {
    type: "POST_CARD_SUCCESS",
    payload: {
      cardNumber,
      expiryDate,
      cardName,
      cvc,
    },
  };
}

export function postCardFailure(error) {
  return {
    type: "POST_CARD_FAILURE",
    payload: {
      error,
    },
  };
}

export function getCardRequest(token) {
  return {
    type: "GET_CARD_REQUEST",
    payload: {
      token,
    },
  };
}

export function getCardSuccess(cardNumber, expiryDate, cardName, cvc) {
  return {
    type: "GET_CARD_SUCCESS",
    payload: {
      cardNumber,
      expiryDate,
      cardName,
      cvc,
    },
  };
}

export function getCardFailure(error) {
  return {
    type: "GET_CARD_FAILURE",
    payload: {
      error,
    },
  };
}

export function editProfile() {
  return {
    type: "EDIT_PROFILE",
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
