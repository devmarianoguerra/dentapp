import React from "react";
import Button from "react-bootstrap/Button";

function RegisterButton() {
  const handleClick = () => {
    console.log("The button was clicked");
  };

  return (
    <>
      <style type="text/css">
        {`
    .btn-main {
      background-color: #00d9cc;
      color: #ffff;
      border: none;
      border-radius: 60px;
      font-family: Roboto;
      letter-spacing: 0.0357143em;
      text-transform: uppercase;
    }

    .btn-size {
      width: 311px;
      height: 53px;
    }
    `}
      </style>

      <Button variant="main" size="size" onClick={handleClick}>
        Enviar
      </Button>
    </>
  );
}

export default RegisterButton;
