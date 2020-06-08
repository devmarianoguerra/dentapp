import React from "react";
import Styled from "styled-components";
import { InputGroup } from "react-bootstrap";

const Form = Styled.input`
width: 311px;
height: 53px;
border: ${(props) => (props.primary ? "#FFFFFF" : "1.5px solid #00D9CC")};
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
color: ${(props) => (props.primary ? "#FFFFFF" : "#4A4A4A")};
`;

class LoginInput extends React.Component {
  state = {
    input: "",
    placeholder: "contact@email.com",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
    console.log("input value: ", e.target.value);
  };

  render() {
    return (
      <>
        <InputLabel primary> Mail </InputLabel>
        <InputGroup>
          <Form
            primary
            placeholder={"contact@email.com"}
            onChange={this.handleChange}
          />
        </InputGroup>

        <InputLabel> Mail </InputLabel>
        <InputGroup>
          <Form
            placeholder={this.state.placeholder}
            onChange={this.handleChange}
          />
        </InputGroup>
      </>
    );
  }
}

export default LoginInput;
