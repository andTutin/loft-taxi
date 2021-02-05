import { postLoginFailure, postLoginSuccess, logout } from "./actions";

export const middleware = (store) => (next) => (action) => {
  if (action.type === "POST_LOGIN_REQUEST") {
    const { email, password } = action.payload;

    fetch("https://loft-taxi.glitch.me/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          localStorage.setItem(
            "session",
            JSON.stringify({
              loginStatus: true,
              email,
              token: data.token,
            })
          );
          store.dispatch(postLoginSuccess(email, data.token));
        } else {
            store.dispatch(postLoginFailure(data.error))
        }
      });
  }

  if (action.type === "LOGOUT_BUTTON_PRESSED") {
    localStorage.removeItem('session')
    store.dispatch(logout())
  }

  next(action);
};
