import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ClickCounter from "./Components/Hooks/ClickCounter";
import HoverCounter from "./Components/Hooks/HoverCounter";
import LifeCycle from "./Components/Hooks/LifeCycle";
import PassStateAsProps from "./Components/Hooks/PassStateAsProps";
import Posts from "./Components/Hooks/Posts";
import StateInClass from "./Components/Hooks/StateInClass";
import UseEffectDemo from "./Components/Hooks/UseEffectDemo";
import UseRefDemo1 from "./Components/Hooks/UseRefDemo-1";
import UseRefDemo2 from "./Components/Hooks/UseRefDemo2";
import UseStateDemo from "./Components/Hooks/UseStateDemo";
import UseStatewithObj from "./Components/Hooks/UseStatewithObj";
import Todo from "./Components/Todo";

import { Provider } from "react-redux";
import store from "./Components/Redux/store";
import CakeStore_1 from "./Components/Redux/CakeStore_1";
import CakeStore_2 from "./Components/Redux/CakeStore_2";
import UserComponent from "./Components/Redux/userComponent";

export default function App() {
  return (
    <div className="container">
      {/* <UseStateDemo /> */}
      {/* <UseStatewithObj /> */}
      {/* <PassStateAsProps /> */}
      {/* <StateInClass /> */}
      {/* <LifeCycle /> */}
      {/* <UseEffectDemo /> */}
      {/* <Posts/> */}
      {/* <UseRefDemo1 /> */}
      {/* <UseRefDemo2 /> */}
      {/* <ClickCounter data="Hello"/>
      <hr />
      <HoverCounter /> */}
      {/* <Todo /> */}

      <Provider store={store}>
        {/* components */}
        {/* <CakeStore_1 />
        <hr />
        <CakeStore_2 /> */}
        <UserComponent />
      </Provider>
    </div>
  );
}
