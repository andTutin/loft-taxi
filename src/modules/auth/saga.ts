import { call, put, takeLatest } from "redux-saga/effects";
import {
  authActions,
  LoginRequestAction,
  RegistrationRequestAction,
} from "./types";
import {
  loginRequestSuccessful,
  loginRequestFailed,
  registrationRequestSuccessful,
  registrationRequestFailed,
} from "./actions";
import { loadingStart, loadingDone } from "../flags/actions";
import { fetchLogin, fetchRegistration } from "./api";
import { getCardRequest } from "../payment";

export function* authSaga() {
  yield takeLatest(
    authActions.LOGIN_REQUEST,
    function* (action: LoginRequestAction) {
      yield put(loadingStart());

      try {
        const result:
          | { success: true; token: string }
          | { success: false; error: string } = yield call(
          fetchLogin,
          action.payload
        );

        if (result.success) {
          yield put(
            loginRequestSuccessful({
              email: action.payload.email,
              token: result.token,
            })
          );

          yield put(getCardRequest(result.token));
        } else {
          throw result.error;
        }
      } catch (error) {
        yield put(loginRequestFailed(error));
      }
    }
  );

  yield takeLatest(
    authActions.REGISTRATION_REQUEST,
    function* (action: RegistrationRequestAction) {
      try {
        const result:
          | { success: true; token: string }
          | { success: false; error: string } = yield call(
          fetchRegistration,
          action.payload
        );

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
      } finally {
        yield put(loadingDone());
      }
    }
  );
}
