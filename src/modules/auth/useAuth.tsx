import { useDispatch, useSelector } from "react-redux";
import { loginRequest, registrationRequest, logoutRequest } from "./actions";
import { ILoginData, IRegistrationData } from "./types";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { token, error } = useSelector((state: any) => state.auth);

  const login = ({ email, password }: ILoginData) => {
    dispatch(loginRequest({ email, password }));
  };

  const registration = ({ email, password, name, surname }: IRegistrationData) => {
    dispatch(
      registrationRequest({
        email,
        password,
        name,
        surname,
      })
    );
  };

  const logout = () => {
    dispatch(logoutRequest());
  };

  return { token, login, registration, logout, error };
};
