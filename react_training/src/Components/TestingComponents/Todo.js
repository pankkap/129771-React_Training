import React from "react";

export default function Todo({ todo }) {
  const { id, title, complete } = todo;
  const h1 = <h1>{title}</h1>;
  const text = complete ? <strike>{h1}</strike> : h1;
  return <div data-testid={`todo-${id}`}>{text}</div>;
}
