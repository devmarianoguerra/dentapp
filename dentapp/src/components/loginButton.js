import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function LoginButton() {
  const handleClick = () => {
    console.log("The button was clicked");
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col sm="auto">
            <style type="text/css">
              {`
                .btn-main {
                background-color: #00d9cc;
                color: #ffff;
                border: none;
                border-radius: 25px;
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginButton;
