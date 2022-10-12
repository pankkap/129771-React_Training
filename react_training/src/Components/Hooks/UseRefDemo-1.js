import React, { useEffect, useRef } from "react";

export default function UseRefDemo1() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  });
  return (
    <div>
      <h2>UseRefDemo-1</h2>
      <input type="text" placeholder="Type Somthing..." ref={inputRef} />
    </div>
  );
}
