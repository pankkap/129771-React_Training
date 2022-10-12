import HOCComponent from "./HOCComponent";

function ClickCounter(props) {
  return (
    <div>
      <h2>Counter Value: {props.counter}</h2>
      <button className="btn btn-primary m-3" onClick={props.increment}>
        {props.data}
      </button>
    </div>
  );
}

export default HOCComponent(ClickCounter);
