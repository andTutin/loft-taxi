import React from "react";
import LeftLogo from "../components/LeftLogo";
import bg from "../bg-auth.jpg";

const LoginPage = ({ setLoginStatus, changePage }) => {
  const navigateTo = (e, page) => {
    e.preventDefault();
    changePage(page);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <LeftLogo />
      <div
        style={{
          flex: "3",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `url(${bg})`,
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "55px 112px",
            borderRadius: "20px",
            boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form
            onSubmit={(e) => {
              setLoginStatus(true);
              navigateTo(e, "map");
            }}
          >
            <h2>Войти</h2>
            <label>
              <h4>Email</h4>
              <input type="text" name="username" placeholder="mail@mail.ru" />
            </label>
            <label>
              <h4>Пароль</h4>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*************"
              />
            </label>
            <p>Забыли пароль?</p>
            <button style={{ maxWidth: "200px" }}>Войти</button>
          </form>
          <div>
            <p>Новый пользователь?</p>
            <a
              href="/registration"
              onClick={(e) => navigateTo(e, "registration")}
            >
              Регистрация
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
