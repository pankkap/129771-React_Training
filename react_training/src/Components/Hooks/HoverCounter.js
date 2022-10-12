import HOCComponent from "./HOCComponent";

function HoverCounter({ counter, increment }) {
  return (
    <div>
      <h2>Counter Value: {counter}</h2>
      <button className="btn btn-primary m-3" onMouseOver={increment}>
        Hover Me
      </button>
    </div>
  );
}
export default HOCComponent(HoverCounter);
