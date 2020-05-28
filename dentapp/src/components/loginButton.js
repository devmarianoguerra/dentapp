import React from "react";
import "./loginButton.css";

function LoginButton() {
  const handleClick = () => {
    console.log("The button was clicked");
  };

  return (
    <>
      <button onClick={handleClick} className="login_button">
        Enviar
      </button>
    </>
  );
}

export default LoginButton;
