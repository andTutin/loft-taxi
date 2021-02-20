import { createAction } from "redux-actions";

const LOADING_START = "LOADING_START";
const LOADING_DONE = "LOADING_DONE";

const PROFILE_OPEN = "PROFILE_OPEN";
const PROFILE_CLOSE = "PROFILE__CLOSE";

export const loadingStart = createAction(LOADING_START);
export const loadingDone = createAction(LOADING_DONE);

export const profileOpen = createAction(PROFILE_OPEN);
export const profileClose = createAction(PROFILE_CLOSE);
