import React, { useContext } from "react";
import AuthContext from "../ctxs/authContext";
import RouteContext from "../ctxs/routeContext";

const Nav = () => {
  const { logout } = useContext(AuthContext);
  const { setActivePage } = useContext(RouteContext);

  return (
    <>
      <ul
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "space-between",
          listStyleType: "none",
        }}
      >
        <li>
          <a
            href="/map"
            onClick={(e) => {
              e.preventDefault();
              setActivePage("map");
            }}
          >
            Карта
          </a>
        </li>
        <li>
          <a
            href="/profile"
            onClick={(e) => {
              e.preventDefault();
              setActivePage("profile");
            }}
          >
            Профиль
          </a>
        </li>
        <li>
          <a
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            Выйти
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
