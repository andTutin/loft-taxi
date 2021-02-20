import { render, screen, cleanup } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  beforeEach(() => {
    render(<LoginPage />);
  });

  it("has logo", () => {
    const logo = screen.getByAltText(/Логотип Лофт Такси/i);
    expect(logo).toBeInTheDocument();
  });

  it("has loginForm", () => {
    const loginForm = screen.getByTestId("login-form");
    expect(loginForm).toBeInTheDocument();
  });
});
