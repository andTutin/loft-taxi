export const ROUTE_REQUEST = "ROUTE_REQUEST";
export const ROUTE_REQUEST_SUCCESSFUL = "ROUTE_REQUEST_SUCCESSFUL";
export const ROUTE_REQUEST_FAILED = "ROUTE_REQUEST_FAILED";
export const ROUTE_RESET = "ROUTE_RESET";

/*
export const routeRequest = createAction(ROUTE_REQUEST);
export const routeRequestSuccessful = createAction(ROUTE_REQUEST_SUCCESSFUL);
export const routeRequestFailed = createAction(ROUTE_REQUEST_FAILED);
export const routeReset = createAction(ROUTE_RESET);
*/

export const routeRequest = ({ address1, address2 }) => ({
  type: ROUTE_REQUEST,
  payload: {
    address1,
    address2,
  },
});

export const routeRequestSuccessful = (route) => ({
  type: ROUTE_REQUEST_SUCCESSFUL,
  route,
});

export const routeRequestFailed = (error) => ({
  type: ROUTE_REQUEST_FAILED,
  error,
});

export const routeReset = () => ({
  type: ROUTE_RESET,
});
