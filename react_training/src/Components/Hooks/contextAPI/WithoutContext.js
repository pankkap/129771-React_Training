import React, { useState } from "react";

export default function WithoutContext() {
  const [userDetails, setuserDetails] = useState({
    name: "Sachin",
    age: 30,
  });
  return (
    <div>
      <h2>This is Grand parent</h2>
      <hr />
      <Parent data={userDetails} />
      <hr />
    </div>
  );
}

function Parent(props) {
  return (
    <>
      <h2>This is Parent</h2>
      <hr />
      <Child data={props.data} />
    </>
  );
}

function Child(props) {
  return (
    <>
      <h2>This is Child</h2>
      <h3>Name: {props.data.name}</h3>
      <h3>Age: {props.data.age}</h3>
    </>
  );
}
