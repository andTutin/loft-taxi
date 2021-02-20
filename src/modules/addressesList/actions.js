import { createAction } from "redux-actions";

const ADDRESSES_LIST_REQUEST = "ADDRESSES_LIST_REQUEST";
const ADDRESSES_LIST_REQUEST_SUCCESSFUL = "ADDRESSES_LIST_REQUEST_SUCCESSFUL";
const ADDRESSES_LIST_REQUEST_FAILED = "ADDRESSES_LIST_REQUEST_FAILED";

export const addressesListRequest = createAction(ADDRESSES_LIST_REQUEST);
export const addressesListRequestSuccessful = createAction(
  ADDRESSES_LIST_REQUEST_SUCCESSFUL
);
export const addressesListRequestFailed = createAction(
  ADDRESSES_LIST_REQUEST_FAILED
);
