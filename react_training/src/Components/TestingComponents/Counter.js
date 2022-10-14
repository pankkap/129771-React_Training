import React, { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);

  function Increment() {
    setcount(count + 1);
  }
  function Decrement() {
    setcount(count - 1);
  }
  return (
    <div>
      <h1 data-testid="counter">{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}
