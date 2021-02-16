import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginRequest,
  loginRequestSuccessful,
  loginRequestFailed,
  registrationRequest,
  registrationRequestSuccessful,
  registrationRequestFailed,
  logoutButtonPressed,
  logout,
} from "./actions";
import { loadingStart, loadingDone } from "../helpers";
import { getCardRequest } from "../payment";

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

export function* authSaga() {
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
        throw new Error(result.error);
      }
    } catch (err) {
      yield put(loadingDone());
      yield put(loginRequestFailed(err));
    }
  });
  yield takeLatest(registrationRequest, function* (action) {
    yield put(loadingStart());
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
        yield put(loadingDone());
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      yield put(registrationRequestFailed(err));
      yield put(loadingDone());
    }
  });
  yield takeLatest(logoutButtonPressed, function* () {
    localStorage.removeItem("session");
    localStorage.removeItem("card");
    localStorage.removeItem("addresses");
    yield put(logout());
  });
}
