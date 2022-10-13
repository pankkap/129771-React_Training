import React, { useCallback, useState } from "react";

const funCount = new Set();

export default function UseCallbackDemo() {
  const [count, setcount] = useState(0);
  const [number, setnumber] = useState(0);

  const incrementCount = useCallback(() => {
    setcount(count + 1);
  }, [count]);
  const decrementCount = useCallback(() => {
    setcount(count - 1);
  }, [count]);
  const incrementNumber = useCallback(() => {
    setnumber(number + 1);
  }, [number]);

  funCount.add(incrementCount);
  funCount.add(decrementCount);
  funCount.add(incrementNumber);
  alert(funCount.size);
  return (
    <div>
      <h2>UseCallback Example</h2>
      Count : {count}
      <br />
      <button onClick={incrementCount}>Increment-Count</button>
      <button onClick={decrementCount}>Decrement-Count</button>
      <button onClick={incrementNumber}>Increment-Number</button>
    </div>
  );
}
