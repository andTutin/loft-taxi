import {
  LOGIN_REQUEST,
  REGISTRATION_REQUEST,
  GET_CARD_REQUEST,
  POST_CARD_REQUEST,
  LOGOUT_BUTTON_PRESSED,
} from "./constants";
import {
  loginRequestSuccessful,
  loginRequestFailed,
  registrationRequestSuccessful,
  registrationRequestFailed,
  getCardRequest,
  getCardRequestSuccessful,
  getCardRequestFailed,
  postCardRequestSuccessful,
  postCardRequestFailed,
  logout,
} from "./actions";

export const middleware = (store) => (next) => (action) => {
  if (action.type === LOGIN_REQUEST) {
    const { email, password } = action.payload;

    fetch("https://loft-taxi.glitch.me/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          localStorage.setItem(
            "session",
            JSON.stringify({
              loginStatus: true,
              email,
              token: data.token,
            })
          );
          store.dispatch(loginRequestSuccessful({ email, token: data.token }));
          store.dispatch(getCardRequest({ token: data.token }));
        } else {
          store.dispatch(loginRequestFailed({ error: data.error }));
        }
      })
      .catch((err) => {
        store.dispatch(loginRequestFailed(err));
      });
  }

  if (action.type === REGISTRATION_REQUEST) {
    const { email, password, name, surname } = action.payload;

    fetch("https://loft-taxi.glitch.me/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email,
        password,
        name,
        surname,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          localStorage.setItem(
            "session",
            JSON.stringify({
              loginStatus: true,
              email,
              token: data.token,
            })
          );
          store.dispatch(
            registrationRequestSuccessful({
              name,
              surname,
              email,
              token: data.token,
            })
          );
        } else {
          store.dispatch(registrationRequestFailed(data.error));
        }
      })
      .catch((err) => {
        store.dispatch(registrationRequestFailed(err));
      });
  }

  if (action.type === POST_CARD_REQUEST) {
    const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;

    fetch("https://loft-taxi.glitch.me/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        cardNumber,
        expiryDate,
        cardName,
        cvc,
        token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          store.dispatch(
            postCardRequestSuccessful({ cardNumber, expiryDate, cardName, cvc })
          );
        } else {
          store.dispatch(postCardRequestFailed(data.error));
        }
      })
      .catch((err) => {
        store.dispatch(postCardRequestFailed(err));
      });
  }

  if (action.type === GET_CARD_REQUEST) {
    const { token } = action.payload;

    fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          store.dispatch(
            getCardRequestSuccessful({
              cardNumber: data.cardNumber,
              expiryDate: data.expiryDate,
              cardName: data.cardName,
              cvc: data.cvc,
            })
          );
          localStorage.setItem(
            "card",
            JSON.stringify({
              cardNumber: data.cardNumber,
              expiryDate: data.expiryDate,
              cardName: data.cardName,
              cvc: data.cvc,
            })
          );
        } else {
          store.dispatch(getCardRequestFailed(data.error));
        }
      })
      .catch((err) => {
        store.dispatch(getCardRequestFailed(err));
      });
  }

  if (action.type === LOGOUT_BUTTON_PRESSED) {
    localStorage.removeItem("session");
    localStorage.removeItem("card");
    store.dispatch(logout());
  }

  next(action);
};
