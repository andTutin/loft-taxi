import {
  LOGIN_REQUEST,
  REGISTRATION_REQUEST,
  GET_CARD_REQUEST,
  POST_CARD_REQUEST,
  LOGOUT_BUTTON_PRESSED,
  ADDRESSES_LIST_REQUEST,
  ROUTE_REQUEST,
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
  setIsLoading,
  setIsProfileOpened,
  addressesListRequestSuccessful,
  addressesListRequestFailed,
  addressesListRequest,
  routeRequestSuccessful,
  routeRequestFailed,
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
          if (!localStorage.getItem("addresses")) {
            store.dispatch(addressesListRequest());
          }
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
          store.dispatch(addressesListRequest());
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
          localStorage.setItem(
            "card",
            JSON.stringify({
              cardNumber,
              expiryDate,
              cardName,
              cvc,
            })
          );
          store.dispatch(
            postCardRequestSuccessful({ cardNumber, expiryDate, cardName, cvc })
          );
          store.dispatch(setIsProfileOpened(false));
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
    store.dispatch(setIsLoading(true));

    fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())

      .then((data) => {
        if (data) {
          store.dispatch(setIsLoading(false));
          return data;
        }
      })
      .then((data) => {
        if (data) {
          localStorage.setItem(
            "card",
            JSON.stringify({
              cardNumber: data.cardNumber,
              expiryDate: data.expiryDate,
              cardName: data.cardName,
              cvc: data.cvc,
            })
          );
          store.dispatch(
            getCardRequestSuccessful({
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
      })
      .finally(() => {
        store.dispatch(setIsLoading(false));
      });
  }

  if (action.type === ADDRESSES_LIST_REQUEST) {
    store.dispatch(setIsLoading(true));

    fetch("https://loft-taxi.glitch.me/addressList", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          let addressesWithIds = data.addresses.map((addr) => {
            return {
              id: Math.trunc(Math.random() * 1e3),
              address: addr,
            };
          });
          localStorage.setItem("addresses", JSON.stringify(addressesWithIds));
          store.dispatch(addressesListRequestSuccessful(addressesWithIds));
        } else {
          store.dispatch(addressesListRequestFailed(data.err));
        }
      })
      .catch((err) => {
        store.dispatch(addressesListRequestFailed(err));
      });
    //.finally(() => {
    //  store.dispatch(setIsLoading(false));
    //});
  }

  if (action.type === ROUTE_REQUEST) {
    const { address1, address2 } = action.payload;

    fetch(
      `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          store.dispatch(routeRequestSuccessful(data));
        } else {
          store.dispatch(routeRequestFailed(data));
        }
      })
      .catch((err) => {
        store.dispatch(routeRequestFailed(err));
      });
    //.finally(() => {
    //  store.dispatch(setIsLoading(false));
    //});
  }

  if (action.type === LOGOUT_BUTTON_PRESSED) {
    localStorage.removeItem("session");
    localStorage.removeItem("card");
    store.dispatch(logout());
  }

  next(action);
};
