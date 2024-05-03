import { render, screen } from "@testing-library/react";
import Button from "../button";

describe("Button", () => {
  it("render button with correct label", () => {
    const label = "Click me";
    render(<Button>{label}</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent(label);
  });
  it("render disabled button", () => {
    render(<Button disabled={true}>Hello world</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute("disabled");
  });
});
