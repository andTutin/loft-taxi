import {
  postLoginSuccess,
  postLoginFailure,
  postRegistrationSuccess,
  postRegistrationFailure,
  postCardSuccess,
  postCardFailure,
  getCardRequest,
  getCardSuccess,
  getCardFailure,
  logout,
} from "./actions";

export const middleware = (store) => (next) => (action) => {
  if (action.type === "POST_LOGIN_REQUEST") {
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
          store.dispatch(postLoginSuccess(email, data.token));

          store.dispatch(getCardRequest(data.token));
        } else {
          store.dispatch(postLoginFailure(data.error));
        }
      })
      .catch((err) => {});
  }

  if (action.type === "POST_REGISTRATION_REQUEST") {
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
          localStorage.setItem(
            "user",
            JSON.stringify({
              name,
              surname,
            })
          );
          store.dispatch(
            postRegistrationSuccess(name, surname, email, data.token)
          );
        } else {
          store.dispatch(postRegistrationFailure(data.error));
        }
      });
  }

  if (action.type === "POST_CARD_REQUEST") {
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
            postCardSuccess(cardNumber, expiryDate, cardName, cvc)
          );
        } else {
          store.dispatch(postCardFailure(data.error));
        }
      });
  }

  if (action.type === "GET_CARD_REQUEST") {
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
            getCardSuccess(
              data.cardNumber,
              data.expiryDate,
              data.cardName,
              data.cvc
            )
          );
        } else {
          store.dispatch(getCardFailure(data.error));
        }
      });
  }

  if (action.type === "LOGOUT_BUTTON_PRESSED") {
    localStorage.removeItem("session");
    store.dispatch(logout());
  }

  next(action);
};
