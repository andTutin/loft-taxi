import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  it("has email input", () => {
    const emailInput = screen.getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();
  });

  it("has password input", () => {
    const passwordInput = screen.getByLabelText("Пароль");
    expect(passwordInput).toBeInTheDocument();
  }),

  it("has login button", () => {
    const button = screen.getByRole("button");
    expect(button.textContent).toEqual("Войти");
  });
});
