import React from "react";
import Styled from "styled-components";

function LoginButton() {
  const handleClick = () => {
    console.log("The button was clicked");
  };

  const Loginbutton = Styled.button`
  background-color: #DBF8FA;
  color:  #00ADC1;
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
      <Loginbutton onClick={handleClick}>Accesar</Loginbutton>
    </>
  );
}

export default LoginButton;
