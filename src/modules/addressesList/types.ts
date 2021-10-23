export enum addressesListActions {
  ADDRESSES_LIST_REQUEST = "ADDRESSES_LIST_REQUEST",
  ADDRESSES_LIST_REQUEST_SUCCESSFUL = "ADDRESSES_LIST_REQUEST_SUCCESSFUL",
  ADDRESSES_LIST_REQUEST_FAILED = "ADDRESSES_LIST_REQUEST_FAILED",
}

export type AddressesRequestAction = {
  type: typeof addressesListActions.ADDRESSES_LIST_REQUEST;
};

export type AddressesRequestSuccessfullAction = {
  type: typeof addressesListActions.ADDRESSES_LIST_REQUEST_SUCCESSFUL;
  addresses: Array<{ id: number; address: string }>;
};

export type AddressesRequestFailedAction = {
  type: typeof addressesListActions.ADDRESSES_LIST_REQUEST_FAILED;
  error: any;
};

export type AddressesListAction =
  | AddressesRequestAction
  | AddressesRequestSuccessfullAction
  | AddressesRequestFailedAction;
