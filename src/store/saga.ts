import { fork } from "redux-saga/effects";
import { authSaga } from "../modules/auth";
import { paymentSaga } from "../modules/payment";
import { addressesListSaga } from "../modules/addressesList";
import { routeSaga } from "../modules/route";

export function* mainSaga() {
  yield fork(authSaga);
  yield fork(paymentSaga);
  yield fork(addressesListSaga);
  yield fork(routeSaga);
}
