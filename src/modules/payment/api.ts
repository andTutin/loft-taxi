import { CardData } from "./types";

export const fetchCardGet = (token: string): Promise<CardData> => {
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
}: CardData & { token: string }) => {
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
