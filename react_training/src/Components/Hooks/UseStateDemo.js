import React, { useState } from "react";

export default function UseStateDemo() {
  const [count, updateCount] = useState(0);
  const [name, setName] = useState("No Name");

  // with this useState, we are able to Maintained the state

  //   console.log(result);

  //   let incrementCount = () => {
  //     updateCount((prevCount) => prevCount + 1);
  //   };

  function decrementCount() {
    updateCount((prevCount) => prevCount - 1);
    setName("Pankaj Kapoor");
  }

  function incrementByFive() {
    for (let i = 0; i < 5; i++) {
      console.log("hello");
      updateCount((prevCount) => prevCount + 1);
    }
  }
  return (
    <div>
      <h1>UseState Demo Example</h1>
      <hr />
      <h2>Count: {count}</h2>
      <button
        className="btn btn-primary"
        onClick={() => updateCount((prevCount) => prevCount + 1)}
      >
        Update Count
      </button>
      <button className="btn btn-danger mx-3" onClick={decrementCount}>
        Decrement Count
      </button>
      <button className="btn btn-success mx-3" onClick={incrementByFive}>
        Increment by 5
      </button>
      <p>My Name is {name}</p>
    </div>
  );
}
