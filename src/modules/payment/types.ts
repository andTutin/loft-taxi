export enum paymentActions {
  POST_CARD_REQUEST = "POST_CARD_REQUEST",
  POST_CARD_REQUEST_SUCCESSFUL = "POST_CARD_REQUEST_SUCCESSFUL",
  POST_CARD_REQUEST_FAILED = "POST_CARD_REQUEST_FAILED",
  GET_CARD_REQUEST = "GET_CARD_REQUEST",
  GET_CARD_REQUEST_SUCCESSFUL = "GET_CARD_REQUEST_SUCCESSFUL",
  GET_CARD_REQUEST_FAILED = "GET_CARD_REQUEST_FAILED",
}

export interface CardData {
  cardNumber: string;
  expiryDate: string;
  cardName: string;
  cvc: string;
}

export type PostCardRequestAction = {
  type: typeof paymentActions.POST_CARD_REQUEST;
  payload: CardData & { token: string };
};

export type PostCardRequestSuccessfullAction = {
  type: typeof paymentActions.POST_CARD_REQUEST_SUCCESSFUL;
  payload: CardData;
};

export type PostCardRequestFailedAction = {
  type: typeof paymentActions.POST_CARD_REQUEST_FAILED;
  error: any;
};

export type GetCardRequestAction = {
  type: typeof paymentActions.GET_CARD_REQUEST;
  token: string;
};

export type GetCardRequestsuccessfullAction = {
  type: typeof paymentActions.GET_CARD_REQUEST_SUCCESSFUL;
  payload: CardData;
};

export type GetCardRequestFailedAction = {
  type: typeof paymentActions.GET_CARD_REQUEST_FAILED;
  error: any;
};
