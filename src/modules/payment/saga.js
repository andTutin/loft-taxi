import { call, put, takeLatest } from "redux-saga/effects";
import {
  getCardRequest,
  getCardRequestFailed,
  getCardRequestSuccessful,
  postCardRequest,
  postCardRequestSuccessful,
  postCardRequestFailed,
} from "./actions";
import { addressesListRequest } from "../addressesList";
import { loadingStart, loadingDone, profileClose } from "../flags";
import { fetchCardGet, fetchCardPost } from "../../API";

export function* paymentSaga() {
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
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      yield put(getCardRequestFailed(err));
      yield put(loadingDone());
    }
  });

  yield takeLatest(postCardRequest, function* (action) {
    yield put(loadingStart());
    try {
      const result = yield call(fetchCardPost, action.payload);
      if (result.success) {
        localStorage.setItem(
          "card",
          JSON.stringify({
            cardNumber: action.payload.cardNumber,
            expiryDate: action.payload.expiryDate,
            cardName: action.payload.cardName,
            cvc: action.payload.cvc,
          })
        );
        yield put(
          postCardRequestSuccessful({
            cardNumber: action.payload.cardNumber,
            expiryDate: action.payload.expiryDate,
            cardName: action.payload.cardName,
            cvc: action.payload.cvc,
          })
        );
        yield put(profileClose());
        if (!localStorage.getItem("addresses")) {
          yield put(addressesListRequest());
        } else {
          yield put(loadingDone());
        }
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      yield put(postCardRequestFailed(err));
      yield put(loadingDone());
    }
  });
}
