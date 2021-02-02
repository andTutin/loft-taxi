import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  test("has logo", () => {
    render(<LoginPage />);
    const logo = screen.getByAltText(/Логотип Лофт Такси/i);
    expect(logo).toBeInTheDocument();
  });

  test("has loginForm", () => {
    render(<LoginPage />);
    const loginForm = screen.getByTestId("login-form");
    expect(loginForm).toBeInTheDocument();
  });
});
