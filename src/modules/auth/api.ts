import { ILoginData, IRegistrationData } from "./types";

export const fetchLogin = ({
  email,
  password,
}: ILoginData): Promise<{
  success: boolean;
  token?: string;
  error?: string;
}> => {
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

export const fetchRegistration = ({
  email,
  password,
  name,
  surname,
}: IRegistrationData): Promise<{
  success: boolean;
  token?: string;
  error?: string;
}> => {
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
