import { handleActions } from "redux-actions";
import { loginRequestFailed, registrationRequestFailed } from "../auth";
import { getCardRequestFailed, postCardRequestFailed } from "../payment";
import { addressesListRequestFailed } from "../addressesList";
import { routeRequestFailed } from "../route";

const error = handleActions(
  {
    [loginRequestFailed]: (state, action) => action.payload,
    [registrationRequestFailed]: (state, action) => action.payload,
    [getCardRequestFailed]: (state, action) => action.payload,
    [postCardRequestFailed]: (state, action) => action.payload,
    [addressesListRequestFailed]: (state, action) => action.payload,
    [routeRequestFailed]: (state, action) => action.payload,
  },
  null
);

export default error;
