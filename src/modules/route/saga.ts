import { call, put, takeLatest } from "redux-saga/effects";
import { routeActions, RoutePoints, RouteRequestAction } from "./types";
import { routeRequestSuccessful, routeRequestFailed } from "./actions";
import { fetchRoute } from "./api";

export function* routeSaga() {
  yield takeLatest(
    routeActions.ROUTE_REQUEST,
    function* (action: RouteRequestAction) {
      try {
        const result: RoutePoints | any = yield call(
          fetchRoute,
          action.payload
        );
        if (result) {
          yield put(routeRequestSuccessful(result));
        } else {
          throw new Error(result.error);
        }
      } catch (error) {
        yield put(routeRequestFailed(error));
      }
    }
  );
}
