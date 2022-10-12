import { useState } from "react";

function HOCComponent(OriginalComponent) {
  function NewComponent(props) {
    const [counter, setcounter] = useState(0);
    function incrementCounter() {
      setcounter((prevCount) => prevCount + 1);
    }
    return <OriginalComponent {...props} counter={counter} increment={incrementCounter} />;
  }

  return NewComponent;
}

export default HOCComponent;
