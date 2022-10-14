import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Todo from "../TestingComponents/Todo";

test("should render non-complete", () => {
  const todo = { id: 1, title: "Buy Coffee", complete: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Buy Coffee");
  expect(todoElement).not.toContainHTML("strike")
});

test("should render todo complete", () => {
  const todo = { id: 2, title: "Buy Icecreme", complete: true };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Buy Icecreme");
  expect(todoElement).toContainHTML("strike");
});