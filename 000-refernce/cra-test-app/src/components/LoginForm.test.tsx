import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm.component";

describe("<LoginForm />", () => {
  it("enables button when both email and password are entered", () => {
    render(<LoginForm onSubmit={() => null} />);

    const button = screen.getByText("로그인");
    const email = screen.getByLabelText("이메일");
    const password = screen.getByLabelText("비밀번호");

    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: "user@test.com" } });
    fireEvent.change(password, { target: { value: "Test1234" } });

    expect(email).toHaveValue("user@test.com");
    expect(password).toHaveValue("Test1234");

    expect(button).toBeEnabled();
  });
});