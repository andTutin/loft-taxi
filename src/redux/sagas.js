import { call, fork, put, takeLatest } from "redux-saga/effects";
import {
  loginRequest,
  loginRequestSuccessful,
  loginRequestFailed,
  getCardRequest,
  getCardRequestFailed,
  getCardRequestSuccessful,
  postCardRequest,
  postCardRequestSuccessful,
  postCardRequestFailed,
  addressesListRequest,
  addressesListRequestSuccessful,
  addressesListRequestFailed,
  loadingStart,
  loadingDone,
  logoutButtonPressed,
  logout,
  routeRequest,
  routeRequestSuccessful,
  routeRequestFailed,
  registrationRequest,
  registrationRequestFailed,
  registrationRequestSuccessful,
} from "./actions";

const fetchLogin = ({ email, password }) => {
  return fetch("https://loft-taxi.glitch.me/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((response) => response.json());
};

const fetchRegistration = ({ email, password, name, surname }) => {
  return fetch("https://loft-taxi.glitch.me/register", {
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
  }).then((response) => response.json());
};

const fetchCardGet = ({ token }) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((response) => response.json());
};

const fetchCardPost = ({ cardNumber, expiryDate, cardName, cvc, token }) => {
  return fetch("https://loft-taxi.glitch.me/card", {
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
  }).then((response) => response.json());
};

const fetchAddressesList = () => {
  return fetch("https://loft-taxi.glitch.me/addressList", {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((response) => response.json());
};

const fetchRoute = ({ address1, address2 }) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  ).then((response) => response.json());
};

function* authorizationSaga() {
  yield takeLatest(loginRequest, function* (action) {
    yield put(loadingStart());
    try {
      const result = yield call(fetchLogin, action.payload);
      if (result.success) {
        localStorage.setItem(
          "session",
          JSON.stringify({
            loginStatus: true,
            email: action.payload.email,
            token: result.token,
          })
        );
        yield put(
          loginRequestSuccessful({
            email: action.payload.email,
            token: result.token,
          })
        );
        yield put(getCardRequest({ token: result.token }));
      } else {
        yield put(loginRequestFailed(result.error));
      }
    } catch (err) {
      yield put(loginRequestFailed(err));
    }
  });
  yield takeLatest(logoutButtonPressed, function* () {
    localStorage.removeItem("session");
    localStorage.removeItem("card");
    localStorage.removeItem("addresses");
    yield put(logout());
  });
}

function* registrationSaga() {
  yield takeLatest(registrationRequest, function* (action) {
    try {
      const result = yield call(fetchRegistration, action.payload);
      if (result.success) {
        localStorage.setItem(
          "session",
          JSON.stringify({
            loginStatus: true,
            email: action.payload.email,
            token: result.token,
          })
        );
        yield put(
          registrationRequestSuccessful({
            email: action.payload.email,
            token: result.token,
          })
        );
      } else {
        yield put(registrationRequestFailed(result.error));
      }
    } catch (err) {
      yield put(registrationRequestFailed(err));
    }
  });
}

function* paymentSaga() {
  yield takeLatest(getCardRequest, function* (action) {
    try {
      const result = yield call(fetchCardGet, action.payload);
      if (result) {
        localStorage.setItem(
          "card",
          JSON.stringify({
            cardNumber: result.cardNumber,
            expiryDate: result.expiryDate,
            cardName: result.cardName,
            cvc: result.cvc,
          })
        );
        yield put(getCardRequestSuccessful(result));
        yield put(addressesListRequest());
      }
    } catch (err) {
      yield put(getCardRequestFailed(err));
    }
  });

  yield takeLatest(postCardRequest, function* (action) {
    yield put(loadingStart());
    try {
      console.log(action.payload);
      const result = yield call(fetchCardPost, action.payload);
      if (result.success) {
        localStorage.setItem(
          "card",
          JSON.stringify({
            cardNumber: result.cardNumber,
            expiryDate: result.expiryDate,
            cardName: result.cardName,
            cvc: result.cvc,
          })
        );
        yield put(
          postCardRequestSuccessful({
            cardNumber: result.cardNumber,
            expiryDate: result.expiryDate,
            cardName: result.cardName,
            cvc: result.cvc,
          })
        );
        yield put(addressesListRequest());
      } else {
        yield put(postCardRequestFailed(result.error));
      }
    } catch (err) {
      yield put(postCardRequestFailed(err));
    }
  });
}

function* addressesListSaga() {
  yield takeLatest(addressesListRequest, function* () {
    try {
      const result = yield call(fetchAddressesList);
      const addressesWithIds = result.addresses.map((addr) => {
        return {
          id: Math.trunc(Math.random() * 1e3),
          address: addr,
        };
      });
      localStorage.setItem("addresses", JSON.stringify(addressesWithIds));
      yield put(addressesListRequestSuccessful(addressesWithIds));
      yield put(loadingDone());
    } catch (err) {
      yield put(addressesListRequestFailed(err));
    }
  });
}

function* routeSaga() {
  yield takeLatest(routeRequest, function* (action) {
    try {
      const result = yield call(fetchRoute, action.payload);
      if (result) {
        yield put(routeRequestSuccessful(result));
      } else {
        yield put(routeRequestFailed(result));
      }
    } catch (err) {
      yield put(routeRequestFailed(err));
    }
  });
}

export function* mainSaga() {
  yield fork(authorizationSaga);
  yield fork(registrationSaga);
  yield fork(paymentSaga);
  yield fork(addressesListSaga);
  yield fork(routeSaga);
}
