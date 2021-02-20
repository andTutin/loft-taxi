import { createAction } from "redux-actions";

const ROUTE_REQUEST = "ROUTE_REQUEST";
const ROUTE_REQUEST_SUCCESSFUL = "ROUTE_REQUEST_SUCCESSFUL";
const ROUTE_REQUEST_FAILED = "ROUTE_REQUEST_FAILED";
const ROUTE_RESET = "ROUTE_RESET";

export const routeRequest = createAction(ROUTE_REQUEST);
export const routeRequestSuccessful = createAction(ROUTE_REQUEST_SUCCESSFUL);
export const routeRequestFailed = createAction(ROUTE_REQUEST_FAILED);
export const routeReset = createAction(ROUTE_RESET);
