export enum routeActions {
  ROUTE_REQUEST = "ROUTE_REQUEST",
  ROUTE_REQUEST_SUCCESSFUL = "ROUTE_REQUEST_SUCCESSFUL",
  ROUTE_REQUEST_FAILED = "ROUTE_REQUEST_FAILED",
  ROUTE_RESET = "ROUTE_RESET",
}

export type Travel = {
  address1: string;
  address2: string;
};

export type RoutePoints = [number, number][];

export type RouteRequestAction = {
  type: typeof routeActions.ROUTE_REQUEST;
  payload: Travel;
};

export type RouteRequestSuccessfullAction = {
  type: typeof routeActions.ROUTE_REQUEST_SUCCESSFUL;
  route: RoutePoints;
};

export type RouteRequestFailedAction = {
  type: typeof routeActions.ROUTE_REQUEST_FAILED;
  error: any;
};

export type RouteResetAction = {
  type: typeof routeActions.ROUTE_RESET;
};

export type RouteAction =
  | RouteRequestAction
  | RouteRequestSuccessfullAction
  | RouteRequestFailedAction
  | RouteResetAction;
