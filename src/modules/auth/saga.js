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
import { loadingStart, loadingDone } from "../flags";
import { getCardRequest } from "../payment";
import { fetchLogin, fetchRegistration } from "./api";

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
