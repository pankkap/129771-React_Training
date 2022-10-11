import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import LifeCycle from "./Components/Hooks/LifeCycle";
import PassStateAsProps from "./Components/Hooks/PassStateAsProps";
import StateInClass from "./Components/Hooks/StateInClass";
import UseEffectDemo from "./Components/Hooks/UseEffectDemo";
import UseStateDemo from "./Components/Hooks/UseStateDemo";
import UseStatewithObj from "./Components/Hooks/UseStatewithObj";

export default function App() {
  return (
    <div className="container">
      {/* <UseStateDemo /> */}
      {/* <UseStatewithObj /> */}
      {/* <PassStateAsProps /> */}
      {/* <StateInClass /> */}
      {/* <LifeCycle /> */}
      <UseEffectDemo />
    </div>
  );
}
