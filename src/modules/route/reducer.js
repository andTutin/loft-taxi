import { handleActions } from "redux-actions";
import {
  routeRequestSuccessful,
  routeRequestFailed,
  routeReset,
} from "./actions";
import { logout } from "../auth";

const route = handleActions(
  {
    [routeRequestSuccessful]: (state, action) => action.payload,
    [routeRequestFailed]: () => [],
    [routeReset]: () => [],
    [logout]: () => [],
  },
  []
);

export default route;
