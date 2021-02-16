export const fetchLogin = ({ email, password }) => {
  return fetch("https://loft-taxi.glitch.me/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((response) => response.json());
};

export const fetchRegistration = ({ email, password, name, surname }) => {
  return fetch("https://loft-taxi.glitch.me/register", {
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
  }).then((response) => response.json());
};

export const fetchAddressesList = () => {
  return fetch("https://loft-taxi.glitch.me/addressList", {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((response) => response.json());
};

export const fetchCardGet = ({ token }) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((response) => response.json());
};

export const fetchCardPost = ({
  cardNumber,
  expiryDate,
  cardName,
  cvc,
  token,
}) => {
  return fetch("https://loft-taxi.glitch.me/card", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      cardNumber,
      expiryDate,
      cardName,
      cvc,
      token,
    }),
  }).then((response) => response.json());
};

export const fetchRoute = ({ address1, address2 }) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  ).then((response) => response.json());
};
