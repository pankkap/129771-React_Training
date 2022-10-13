import React, { useReducer } from "react";

const ACTION = {
  INCRREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCRREMENT:
      return {
        count: state.count + 1,
      };
    case ACTION.DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export default function UseReducerDemo() {
  const [state, disptach] = useReducer(reducer, { count: 0 });

  //   const [count, setcount] = useState(0);

  function increment() {
    disptach({ type: ACTION.INCRREMENT });
  }
  function decrement() {
    // setcount((prevCount) => prevCount - 1);
    disptach({ type: ACTION.DECREMENT });
  }

  return (
    <div className="container mt-5">
      <h2>Example</h2>
      <hr />
      <button className="btn btn-primary mx-3" onClick={decrement}>
        -
      </button>
      {state.count}
      <button className="btn btn-primary mx-3" onClick={increment}>
        +
      </button>
    </div>
  );
}
