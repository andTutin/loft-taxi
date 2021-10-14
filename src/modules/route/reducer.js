import { ROUTE_REQUEST_FAILED, ROUTE_REQUEST_SUCCESSFUL, ROUTE_RESET } from ".";
import { LOGOUT } from "../auth";
const initialState = {
  route: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ROUTE_REQUEST_SUCCESSFUL:
      return {
        ...state,
        route: action.route,
      };

    case ROUTE_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };

    case ROUTE_RESET:
      return {
        ...initialState,
      };
    case LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
export default reducer;
