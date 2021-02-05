import {
  postLoginSuccess,
  postLoginFailure,
  postRegistrationSuccess,
  postRegistrationFailure,
  logout,
} from "./actions";

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
          store.dispatch(postLoginFailure(data.error));
        }
      });
  }

  if (action.type === "POST_REGISTRATION_REQUEST") {
    const { email, password, name, surname } = action.payload;

    fetch("https://loft-taxi.glitch.me/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email,
        password,
        name,
        surname,
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
          localStorage.setItem(
            "user",
            JSON.stringify({
              name,
              surname,
            })
          );
          store.dispatch(
            postRegistrationSuccess(name, surname, email, data.token)
          );
        } else {
          store.dispatch(postRegistrationFailure(data.error));
        }
      });
  }

  if (action.type === "LOGOUT_BUTTON_PRESSED") {
    localStorage.removeItem("session");
    store.dispatch(logout());
  }

  next(action);
};
