import React, { createContext, useContext, useState } from "react";

const userDetailContext = createContext(null);
export default function WithContextApi() {
  const [userDetails, setuserDetails] = useState({
    name: "Sachin",
    age: 30,
  });

  function UpdateDetails() {
    setuserDetails({ age: 35 });
  }
  return (
    <userDetailContext.Provider
      value={{ Details: userDetails, myFunction: UpdateDetails }}
    >
      <div>
        <h2>This is Grand parent</h2>
        <hr />
        <Parent />
        <hr />
      </div>
    </userDetailContext.Provider>
  );
}

function Parent(props) {
  const { Details } = useContext(userDetailContext);
  return (
    <>
      <h2>This is Parent</h2>
      <h3>Name: {Details.name}</h3>
      <h3>Age: {Details.age}</h3>
      <hr />
      <Child />
    </>
  );
}

function Child(props) {
  const data = useContext(userDetailContext);
  return (
    <>
      <h2>This is Child</h2>
      <h3>Name: {data.Details.name}</h3>
      <h3>Age: {data.Details.age}</h3>
      <button className="btn btn-primary m-3" onClick={data.myFunction}>
        Update Age
      </button>
    </>
  );
}
