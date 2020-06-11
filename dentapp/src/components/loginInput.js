import React from "react";
import Styled from "styled-components";
import { InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const white = "#FFFFFF";
const cyan = "#00D9CC";
const darkgrey = "#4A4A4A";

const Form = Styled.input`
width: 311px;
height: 53px;
border: ${(props) => (props.theme ? white : `1.5px solid ${cyan}`)};
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
color: ${(props) => (props.theme ? white : darkgrey)};
`;

class LoginInput extends React.Component {
  state = {
    input: "",
  };

  render() {
    return (
      <>
        <InputLabel> {props.label} </InputLabel>
        <InputGroup>
          <Form placeholder={props.actionText} onChange={props.handleChange} />
        </InputGroup>
      </>
    );
  }
}

export default LoginInput;

Form.PropTypes = {
  theme: PropTypes.border({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
  }),
};

InputLabel.PropTypes = {
  theme: PropTypes.color({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
  }),
};
