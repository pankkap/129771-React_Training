import { render, screen, cleanup } from "@testing-library/react";

import UserEvent from "@testing-library/user-event";
import Counter from "../TestingComponents/Counter";

describe("Testing Counter Component", () => {
  test("counter is increment on increment buttin click", () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByText("Increment");

    UserEvent.click(incrementBtn);
    UserEvent.click(incrementBtn);

    expect(counter.textContent).toEqual("2");
  });
  test("counter is decrement on decrement buttin click", () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter");
    const decrementBtn = screen.getByText("Decrement");

    UserEvent.click(decrementBtn);
    UserEvent.click(decrementBtn);

    expect(counter.textContent).toEqual("-2");
  });
});
