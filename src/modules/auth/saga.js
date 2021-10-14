import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  REGISTRATION_REQUEST,
  loginRequestSuccessful,
  loginRequestFailed,
  registrationRequestSuccessful,
  registrationRequestFailed,
} from "./actions";
import { fetchLogin, fetchRegistration } from "./api";

export function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, function* (action) {
    try {
      const result = yield call(fetchLogin, action.payload);

      if (result.success) {
        yield put(
          loginRequestSuccessful({
            email: action.payload.email,
            token: result.token,
          })
        );
      } else {
        throw result.error;
      }
    } catch (error) {
      yield put(loginRequestFailed(error));
    }
  });

  yield takeLatest(REGISTRATION_REQUEST, function* (action) {
    try {
      const result = yield call(fetchRegistration, action.payload);

      if (result.success) {
        yield put(
          registrationRequestSuccessful({
            email: action.payload.email,
            token: result.token,
          })
        );
      } else {
        throw result.error;
      }
    } catch (error) {
      yield put(registrationRequestFailed(error));
    }
  });
}
