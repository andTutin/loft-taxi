export const ADDRESSES_LIST_REQUEST = "ADDRESSES_LIST_REQUEST";
export const ADDRESSES_LIST_REQUEST_SUCCESSFUL =
  "ADDRESSES_LIST_REQUEST_SUCCESSFUL";
export const ADDRESSES_LIST_REQUEST_FAILED = "ADDRESSES_LIST_REQUEST_FAILED";

export const addressesListRequest = () => ({
  type: ADDRESSES_LIST_REQUEST,
});

export const addressesListRequestSuccessful = (addresses) => ({
  type: ADDRESSES_LIST_REQUEST_SUCCESSFUL,
  addresses,
});

export const addressesListRequestFailed = (error) => ({
  type: ADDRESSES_LIST_REQUEST_FAILED,
  error,
});
