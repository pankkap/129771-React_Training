import React, { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [counter, setcounter] = useState(0);
  const [name, setname] = useState("");

  useEffect(() => {
    console.log("Use Effect Called");
    document.title = `You clicked ${counter}`;

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>This is use Effect (Life Cycle in Functional Approch)</h2>
      <button onClick={() => setcounter((prevCount) => prevCount + 1)}>
        {counter}
      </button>
      <input type="text" onChange={(e) => setname(e.target.value)} />
    </div>
  );
}
