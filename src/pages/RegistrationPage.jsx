import React, { useContext } from "react";
import AuthContext from "../ctxs/authContext";
import RouteContext from "../ctxs/routeContext";
import LeftLogo from "../components/LeftLogo";
import bg from "../bg-auth.jpg";

const RegistrationPage = () => {
  const { login } = useContext(AuthContext);
  const { setActivePage } = useContext(RouteContext);

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <LeftLogo />
      <div
        style={{
          flex: "2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `url(${bg})`,
          backgroundSize: "cover",
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
              e.preventDefault();
              login();
            }}
          >
            <h2>Регистрация</h2>
            <label>
              <h4>Email*</h4>
              <input type="email" name="useremail" placeholder="mail@mail.ru" />
            </label>
            <label>
              <h4>Как вас зовут?*</h4>
              <input
                type="text"
                name="userfirstname"
                placeholder="Пётр Александрович"
              />
            </label>
            <label>
              <h4>Придумайте пароль*</h4>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*************"
              />
            </label>
            <br />
            <br />
            <button style={{ maxWidth: "200px" }}>Зарегистрироваться</button>
          </form>

          <div>
            <p>Уже зарегистрированы?</p>
            <a
              href="/login"
              onClick={(e) => {
                e.preventDefault();
                setActivePage("login");
              }}
            >
              Войти
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
