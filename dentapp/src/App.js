import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/index.js";

import ShoppingButton from "./components/shoppingButton";
import UserButton from "./components/UserButton";

function App(props) {
  return (
    <>
      <ShoppingButton />
      <UserButton />
    </>
  );
}

export default App;
