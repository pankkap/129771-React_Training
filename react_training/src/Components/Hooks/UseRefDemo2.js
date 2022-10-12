import React, { useEffect, useRef, useState } from "react";

export default function UseRefDemo2() {
  const [counter, setcounter] = useState(0);
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setcounter((prevCount) => prevCount + 1);
    }, 1000);
  }, []);
  return (
    <div>
      <h2>UseRefDemo2</h2>

      <h3>Counter Value: {counter}</h3>
      <button
        className="btn btn-danger"
        onClick={() => clearInterval(interval.current)}
      >
        Stop
      </button>
    </div>
  );
}
