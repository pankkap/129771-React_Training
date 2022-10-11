import React from "react";

export default function Names(props) {
  // destructuring
  let { name, index } = props;
  return (
    <>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{name.length}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={props.callback}>
          Click Me
        </button>
        <button
          className="btn btn-sm btn-success mx-3"
          onClick={() => props.promoteCallback(name)}
        >
          Promote
        </button>
      </td>
    </>
  );
}
