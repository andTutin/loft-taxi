import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("has email input", () => {
    render(<LoginForm />);
    const emailInput = screen.getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();
  });

  it("has password input", () => {
    render(<LoginForm />);
    const passwordInput = screen.getByLabelText("Пароль");
    expect(passwordInput).toBeInTheDocument();
  }),
    it("has login button", () => {
      render(<LoginForm />);
      const button = screen.getByRole("button");
      expect(button.textContent).toEqual("Войти");
    });
});
