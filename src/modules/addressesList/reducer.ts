import { addressesListActions, AddressesListAction } from "./types";

export type AddressesListState = {
  addresses: Array<{ id: number; address: string }> | [];
  error: string | null;
};

const initialState: AddressesListState = {
  addresses: [],
  error: null,
};

const reducer = (
  state: AddressesListState = initialState,
  action: AddressesListAction
): AddressesListState => {
  switch (action.type) {
    case addressesListActions.ADDRESSES_LIST_REQUEST_SUCCESSFUL:
      return {
        ...state,
        addresses: action.addresses,
      };

    case addressesListActions.ADDRESSES_LIST_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
