import React from "react";
import Styled from "styled-components";

function RegisterButton() {
  const handleClick = () => {
    console.log("The button was clicked");
  };

  const RegisterButton = Styled.button`
    background-color: #00d9cc;
    color: #ffff;
    border: none;
    border-radius: 60px;
    font-family: Roboto;
    letter-spacing: 0.0357143em;
    text-transform: uppercase;
    width: 311px;
    height: 53px;
  `;

  return (
    <>
      <RegisterButton variant="main" size="size" onClick={handleClick}>
        Enviar
      </RegisterButton>
    </>
  );
}

export default RegisterButton;
