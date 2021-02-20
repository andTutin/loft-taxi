import { render, screen, cleanup } from "@testing-library/react";
import RegistrationPage from "./RegistrationPage";

describe("RegistrationPage", () => {
  beforeEach(() => {
    render(<RegistrationPage />);
  });

  afterEach(() => cleanup());

  it("has logo", () => {
    const logo = screen.getByAltText(/Логотип Лофт Такси/i);
    expect(logo).toBeInTheDocument();
  });

  it("has ResistrationForm", () => {
    const registrationForm = screen.getByTestId("registration-form");
    expect(registrationForm).toBeInTheDocument();
  });
});
