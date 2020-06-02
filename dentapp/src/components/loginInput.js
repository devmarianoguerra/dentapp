import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import Styled from "styled-components";

class LoginInput extends React.Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
    console.log("input value: ", e.target.value);
  };

  LoginInputStyle = Styled.input`
      width: 311,
      height: 53,
      fontSize: 18,
      color: "red",
      borderColor: "red",
      borderWidth: 1.5,
      borderRadius: 60,
      fontFamily: "Roboto",
  `;

  render() {
    return (
      <>
        <LoginInputStyle>
          <div>
            <FormControl
              placeholder="contact@email.com"
              onChange={this.handleChange}
            />
          </div>
        </LoginInputStyle>
      </>
    );
  }
}

export default LoginInput;
