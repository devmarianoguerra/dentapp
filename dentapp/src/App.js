import React from "react";
import "./App.css";
import LoginButton from "./components/loginButton";
import RegisterButton from "./components/registerButton";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <LoginButton />
      <RegisterButton />
    </>
  );
}

export default App;
