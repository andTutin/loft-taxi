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
      const result: { addresses: string[] } = yield call(fetchAddressesList);

      const addressesWithIds: Array<{ id: number; address: string }> =
        result.addresses.map((addr: string) => ({
          id: Math.trunc(Math.random() * 1e3),
          address: addr,
        }));

      yield put(addressesListRequestSuccessful(addressesWithIds));
    } catch (error) {
      yield put(
        addressesListRequestFailed("Не удалось загрузить список адресов.")
      );
    } finally {
      yield put(loadingDone());
    }
  });
}
