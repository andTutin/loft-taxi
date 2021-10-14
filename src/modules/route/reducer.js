import { handleActions } from "redux-actions";
import {
  routeRequestSuccessful,
  routeRequestFailed,
  routeReset,
} from "./actions";
import { logoutRequest } from "../auth";

const route = handleActions(
  {
    [routeRequestSuccessful]: (state, action) => action.payload,
    [routeRequestFailed]: () => [],
    [routeReset]: () => [],
    [logoutRequest]: () => [],
  },
  []
);

export default route;
