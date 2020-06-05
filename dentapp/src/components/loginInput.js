import React from "react";
import Styled from "styled-components";
import { InputGroup } from "react-bootstrap";

const Form = Styled.input`
width: 311px;
height: 53px;
border: 1.5px solid #00D9CC;
border-radius: 60px;
text-align: left;
padding-left: 25px;
font-size: 18px;
line-height: 12px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
color: #929292;
`;

const InputLabel = Styled.label`
margin-left: 25px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 12px;
color: #4A4A4A;
`;

class LoginInput extends React.Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
    console.log("input value: ", e.target.value);
  };

  render() {
    return (
      <>
        <InputLabel htmlFor=""> Mail </InputLabel>
        <InputGroup>
          <Form placeholder="contact@email.com" onChange={this.handleChange} />
        </InputGroup>

        <InputLabel htmlFor=""> Mail </InputLabel>
        <InputGroup>
          <Form placeholder="contact@email.com" onChange={this.handleChange} />
        </InputGroup>
      </>
    );
  }
}

export default LoginInput;