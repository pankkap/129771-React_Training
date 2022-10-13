import React, { useMemo, useState } from "react";

export default function UseMemoDemo() {
  const [number, setnumber] = useState(0);
  const [dark, setdark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div>
      <h2>UseMemo Example</h2>
      <hr />
      <input
        type="number"
        value={number}
        onChange={(e) => setnumber(parseInt(e.target.value))}
      />
      <button
        className="btn btn-primary m-3"
        onClick={() => setdark((prevdark) => !prevdark)}
      >
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  for (let i = 0; i < 2000000000; i++) {}
  return num * 2;
}
