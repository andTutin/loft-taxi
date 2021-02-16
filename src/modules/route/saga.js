import { call, put, takeLatest } from "redux-saga/effects";
import {
  routeRequest,
  routeRequestSuccessful,
  routeRequestFailed,
} from "./actions";

const fetchRoute = ({ address1, address2 }) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  ).then((response) => response.json());
};

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
