import { call, put, takeLatest } from "redux-saga/effects";
import { ROUTE_REQUEST } from ".";
import { routeRequestSuccessful, routeRequestFailed } from "./actions";
import { fetchRoute } from "./api";

export function* routeSaga() {
  yield takeLatest(ROUTE_REQUEST, function* (action) {
    try {
      const result = yield call(fetchRoute, action.payload);
      if (result) {
        yield put(routeRequestSuccessful(result));
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      yield put(routeRequestFailed(error));
    }
  });
}
