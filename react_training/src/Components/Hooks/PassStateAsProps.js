import React, { useState } from "react";

export default function PassStateAsProps() {
  const [count, setcount] = useState(0);
  function increment() {
    setcount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <h1>This is Parent</h1>
      <h2>Count={count}</h2>
      <hr />
      <Component1 count={count} callback={increment} />
      <hr />
      <Component2 count={count} callback={increment} />
    </div>
  );
}

function Component1(props) {
  return (
    <div>
      <h1>This is Component-1</h1>
      <h2>Count-{props.count}</h2>
      <button className="btn btn-primary" onClick={props.callback}>
        Increment
      </button>
    </div>
  );
}

function Component2(props) {
  return (
    <div>
      <h1>This is Component-2</h1>
      <h2>Count-{props.count}</h2>
      <button className="btn btn-primary" onClick={props.callback}>
        Increment
      </button>
    </div>
  );
}
