import React from "react";

export default function FuncComp(props) {
  console.log(props);

  // Destructuring
  
  props.title = 234;
  // props are read only.

  return (
    <div>
      <h2>This is Functional Component-{props.title}</h2>
      <h3>My Location is {props.location}</h3>
    </div>
  );
}

// rfc -> Snippet for creating Function  Component
