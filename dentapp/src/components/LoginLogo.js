import React from "react";

import Container from "react-bootstrap/Container";
import LogoDentappBlanco from "../assets/LogoDentappBlanco.svg";

export default function LoginLogo(props) {

    return (
      <Container fluid>
        <img src={LogoDentappBlanco} alt="logo" />
      </Container>
    );
  }

