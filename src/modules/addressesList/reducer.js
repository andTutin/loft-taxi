import {
  ADDRESSES_LIST_REQUEST_SUCCESSFUL,
  ADDRESSES_LIST_REQUEST_FAILED,
} from "./actions";
import { LOGOUT } from "../auth";
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
    case LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default reducer;
