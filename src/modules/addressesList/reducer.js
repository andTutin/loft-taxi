import {
  ADDRESSES_LIST_REQUEST_SUCCESSFUL,
  ADDRESSES_LIST_REQUEST_FAILED,
} from "./actions";
import { authActions } from "../auth/types";
const initialState = {
  addresses: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDRESSES_LIST_REQUEST_SUCCESSFUL:
      return {
        ...state,
        addresses: action.addresses,
      };

    case ADDRESSES_LIST_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };

    case authActions.LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default reducer;
