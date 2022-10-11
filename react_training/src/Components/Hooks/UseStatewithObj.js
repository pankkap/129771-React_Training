import React, { useState } from "react";

export default function UseStatewithObj() {
  const [name, setname] = useState({ firstName: "", lastName: "" });

  return (
    <div className="mt-5">
      <input
        type="text"
        onChange={(e) => setname({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setname({ ...name, lastName: e.target.value })}
      />
      <h3>My Name is: {JSON.stringify(name)}</h3>
    </div>
  );
}
