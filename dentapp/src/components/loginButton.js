import React from "react";
import Styled from "styled-components";

function LoginButton() {
  const handleClick = () => {
    console.log("The button was clicked");
  };

  const Button = Styled.button`
  background-color: ${(props) => (props.primary ? "#DBF8FA" : "#00d9cc")};
  color: ${(props) => (props.primary ? "#00ADC1" : "#ffff")};
  border: none;
  border-radius: 60px;
  font-family: ${(props) => (props.primary ? "Roboto" : "Roboto")};
  letter-spacing: 0.0357143em;
  text-transform: uppercase;
  width: 311px;
  height: 53px;
  `;

  return (
    <>
      <Button primary onClick={handleClick}>
        Accesar
      </Button>

      <Button onClick={handleClick}>Enviar</Button>
    </>
  );
}

export default LoginButton;
