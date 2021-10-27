import {
  routeActions,
  RoutePoints,
  RouteRequestAction,
  RouteRequestFailedAction,
  RouteRequestSuccessfullAction,
  RouteResetAction,
  Travel,
} from "./types";

export const routeRequest = ({
  address1,
  address2,
}: Travel): RouteRequestAction => ({
  type: routeActions.ROUTE_REQUEST,
  payload: {
    address1,
    address2,
  },
});

export const routeRequestSuccessful = (
  route: RoutePoints
): RouteRequestSuccessfullAction => ({
  type: routeActions.ROUTE_REQUEST_SUCCESSFUL,
  route,
});

export const routeRequestFailed = (error: any): RouteRequestFailedAction => ({
  type: routeActions.ROUTE_REQUEST_FAILED,
  error,
});

export const routeReset = (): RouteResetAction => ({
  type: routeActions.ROUTE_RESET,
});
