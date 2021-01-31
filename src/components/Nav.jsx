import React from "react";

const Nav = ({ setLoginStatus, changePage }) => {
  const navigateTo = (e, page) => {
    e.preventDefault();
    changePage(page);
  };

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
          <a href="/map" onClick={(e) => navigateTo(e, "map")}>
            Карта
          </a>
        </li>
        <li>
          <a href="/profile" onClick={(e) => navigateTo(e, "profile")}>
            Профиль
          </a>
        </li>
        <li>
          <a
            href="/login"
            onClick={(e) => {
              setLoginStatus(false);
              navigateTo(e, "login");
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
