import { render, screen } from "@testing-library/react";
import RegistrationPage from "./RegistrationPage";

describe("LoginPage", () => {
  test("has logo", () => {
    render(<RegistrationPage />);
    const logo = screen.getByAltText(/Логотип Лофт Такси/i);
    expect(logo).toBeInTheDocument();
  });

  test("has loginForm", () => {
    render(<RegistrationPage />);
    const registrationForm = screen.getByTestId("registration-form");
    expect(registrationForm).toBeInTheDocument();
  });
});
