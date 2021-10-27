import { routeActions, RouteAction, RoutePoints } from "./types";

export type RouteState = {
  route: RoutePoints | [];
  error: string | null;
};

const initialState: RouteState = {
  route: [],
  error: null,
};

const reducer = (
  state: RouteState = initialState,
  action: RouteAction
): RouteState => {
  switch (action.type) {
    case routeActions.ROUTE_REQUEST_SUCCESSFUL:
      return {
        ...state,
        route: action.route,
      };

    case routeActions.ROUTE_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };

    case routeActions.ROUTE_RESET:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
export default reducer;
