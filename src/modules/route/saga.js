import { call, put, takeLatest } from "redux-saga/effects";
import {
  routeRequest,
  routeRequestSuccessful,
  routeRequestFailed,
} from "./actions";
import { fetchRoute } from "./api";

export function* routeSaga() {
  yield takeLatest(routeRequest, function* (action) {
    try {
      const result = yield call(fetchRoute, action.payload);
      if (result) {
        yield put(routeRequestSuccessful(result));
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      yield put(routeRequestFailed(err));
    }
  });
}
