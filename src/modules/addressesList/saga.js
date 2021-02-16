import { call, put, takeLatest } from "redux-saga/effects";
import {
  addressesListRequest,
  addressesListRequestSuccessful,
  addressesListRequestFailed,
} from "./actions";
import { loadingDone } from "../flags";
import { fetchAddressesList } from "../../API";

export function* addressesListSaga() {
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
      yield put(loadingDone());
    }
  });
}
