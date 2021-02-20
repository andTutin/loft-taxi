import { useDispatch, useSelector } from "react-redux";
import {
  loginRequest,
  registrationRequest,
  logoutButtonPressed,
} from "../../modules/auth";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const login = ({ email, password }) => {
    dispatch(loginRequest({ email, password }));
  };

  const registration = ({ email, password, name, surname }) => {
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
    dispatch(logoutButtonPressed());
  };

  return { token, login, registration, logout };
};
