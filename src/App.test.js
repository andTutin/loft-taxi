import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    const logo = screen.getByAltText(/Логотип Лофт Такси/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders LoginPage without initialPage prop", () => {
    render(<App />);
    const loginForm = screen.getByTestId("login-form");
    expect(loginForm).toBeInTheDocument();
  });

  it("renders RegistrationPage if prop initialPage='registration'", () => {
    render(<App initialPage="registration"/>);
    const registrationForm = screen.getByTestId("registration-form");
    expect(registrationForm).toBeInTheDocument();
  });
});
