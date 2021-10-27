import { RoutePoints, Travel } from "./types";

export const fetchRoute = ({
  address1,
  address2,
}: Travel): Promise<RoutePoints> => {
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
