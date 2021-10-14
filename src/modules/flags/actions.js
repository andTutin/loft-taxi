export const LOADING_START = "LOADING_START";
export const LOADING_DONE = "LOADING_DONE";

export const PROFILE_OPEN = "PROFILE_OPEN";
export const PROFILE_CLOSE = "PROFILE__CLOSE";

export const loadingStart = () => ({
  type: LOADING_START,
});

export const loadingDone = () => ({
  type: LOADING_DONE,
});

export const profileOpen = () => ({
  type: PROFILE_OPEN,
});

export const profileClose = () => ({
  type: PROFILE_CLOSE,
});
