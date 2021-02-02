import { render, screen } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";

describe("LoginForm", () => {
  it("has email input", () => {
    render(<RegistrationForm />);
    const emailInput = screen.getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();
  });

  it("has name input", () => {
    render(<RegistrationForm />);
    const passwordInput = screen.getByLabelText("Как вас зовут?");
    expect(passwordInput).toBeInTheDocument();
  }),
  it("has password input", () => {
    render(<RegistrationForm />);
    const passwordInput = screen.getByLabelText("Придумайте пароль");
    expect(passwordInput).toBeInTheDocument();
  }),
    it("has login button", () => {
      render(<RegistrationForm />);
      const button = screen.getByRole("button");
      expect(button.textContent).toEqual("Зарегистрироваться");
    });
});