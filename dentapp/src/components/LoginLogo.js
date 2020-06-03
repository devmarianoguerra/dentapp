import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import LogoDentappBlanco from "../assets/LogoDentappBlanco.svg";

class LoginLogo extends Component {
  state = {};

  render() {
    return (
      <Container fluid>
        <img src={LogoDentappBlanco} alt="logo" />
      </Container>
    );
  }
}

export default LoginLogo;
