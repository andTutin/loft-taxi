import { call, put, takeLatest } from "redux-saga/effects";
//import { loadingStart } from "../flags/actions";
import {
  GET_CARD_REQUEST,
  getCardRequestFailed,
  getCardRequestSuccessful,
  POST_CARD_REQUEST,
  postCardRequestSuccessful,
  postCardRequestFailed,
} from "./actions";
import { fetchCardGet, fetchCardPost } from "./api";
import { addressesListRequest } from "../addressesList";
import { loadingDone, profileClose } from "../flags";

export function* paymentSaga() {
  yield takeLatest(GET_CARD_REQUEST, function* (action) {
    try {
      const result = yield call(fetchCardGet, action.token);
      if (result.id) {
        const { cardNumber, cardName, expiryDate, cvc } = result;

        yield put(
          getCardRequestSuccessful({ cardNumber, cardName, expiryDate, cvc })
        );

        yield put(addressesListRequest());
      } else {
        throw result.error;
      }
    } catch (error) {
      yield put(getCardRequestFailed(error));
      yield put(loadingDone());
    }
  });

  yield takeLatest(POST_CARD_REQUEST, function* (action) {
    try {
      const result = yield call(fetchCardPost, action.payload);

      if (result.success) {
        yield put(postCardRequestSuccessful({ ...action.payload }));
        yield put(addressesListRequest());
        yield put(profileClose());
      } else {
        throw result.error;
      }
    } catch (error) {
      yield put(postCardRequestFailed(error));
    }
  });
}
