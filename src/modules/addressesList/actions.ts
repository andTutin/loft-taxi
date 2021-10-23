import {
  addressesListActions,
  AddressesRequestAction,
  AddressesRequestSuccessfullAction,
  AddressesRequestFailedAction,
} from "./types";

export const addressesListRequest = (): AddressesRequestAction => ({
  type: addressesListActions.ADDRESSES_LIST_REQUEST,
});

export const addressesListRequestSuccessful = (
  addresses: Array<{
    id: number;
    address: string;
  }>
): AddressesRequestSuccessfullAction => ({
  type: addressesListActions.ADDRESSES_LIST_REQUEST_SUCCESSFUL,
  addresses,
});

export const addressesListRequestFailed = (
  error: any
): AddressesRequestFailedAction => ({
  type: addressesListActions.ADDRESSES_LIST_REQUEST_FAILED,
  error,
});
