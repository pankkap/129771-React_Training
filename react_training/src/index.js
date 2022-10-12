// 1. react: is used to create React Elements eg: jsx
// 2. react-dom: is used to display react elements using DOM

import React from "react";
import ReactDOM from "react-dom/client";
import MyApp from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <MyApp />
  </>
);
