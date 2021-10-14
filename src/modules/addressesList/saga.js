import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADDRESSES_LIST_REQUEST,
  addressesListRequestSuccessful,
  addressesListRequestFailed,
} from "./actions";
import { loadingDone } from "../flags";
import { fetchAddressesList } from "./api";

export function* addressesListSaga() {
  yield takeLatest(ADDRESSES_LIST_REQUEST, function* () {
    try {
      const result = yield call(fetchAddressesList);

      const addressesWithIds = result.addresses.map((addr) => ({
        id: Math.trunc(Math.random() * 1e3),
        address: addr,
      }));

      yield put(addressesListRequestSuccessful(addressesWithIds));
    } catch (error) {
      yield put(addressesListRequestFailed(error));
    } finally {
      yield put(loadingDone());
    }
  });
}
