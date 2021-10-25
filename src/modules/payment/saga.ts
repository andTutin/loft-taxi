import { call, put, takeLatest } from "redux-saga/effects";
//import { loadingStart } from "../flags/actions";
import {
  getCardRequestFailed,
  getCardRequestSuccessful,
  postCardRequestSuccessful,
  postCardRequestFailed,
} from "./actions";
import {
  CardData,
  GetCardRequestAction,
  paymentActions,
  PostCardRequestAction,
} from "./types";
import { fetchCardGet, fetchCardPost } from "./api";
import { addressesListRequest } from "../addressesList";
import { loadingDone, profileClose } from "../flags";

export function* paymentSaga() {
  yield takeLatest(
    paymentActions.GET_CARD_REQUEST,
    function* (action: GetCardRequestAction) {
      try {
        const result: { id: string } & CardData = yield call(
          fetchCardGet,
          action.token
        );
        if (result.id) {
          const { cardNumber, cardName, expiryDate, cvc } = result;

          yield put(
            getCardRequestSuccessful({ cardNumber, cardName, expiryDate, cvc })
          );

          yield put(addressesListRequest());
        }
      } catch (error) {
        yield put(getCardRequestFailed(error));
        yield put(loadingDone());
      }
    }
  );

  yield takeLatest(
    paymentActions.POST_CARD_REQUEST,
    function* (action: PostCardRequestAction) {
      try {
        const result: { success: boolean; error?: string } = yield call(
          fetchCardPost,
          action.payload
        );

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
    }
  );
}
