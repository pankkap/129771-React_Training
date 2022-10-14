import { render, screen } from "@testing-library/react";
import List from "../TestingComponents/List";

test("List contains 5 Animals", () => {
  render(<List />);
  const listElement = screen.getByRole("list");
  const listItems = screen.getAllByRole("listitem");
  // expect(listElement).toBeInTheDocument();

  // expect(listElement).toHaveClass("animals");
  expect(listItems.length).toEqual(5);
});
