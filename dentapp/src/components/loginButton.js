import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";

const white = "#ffff";
const cerulean = "#00ADC1";
const mint = "#DBF8FA";
const cyan = "#00d9cc";
const primaryFont = "Roboto";

const Button = Styled.button`
background-color: ${(props) => (props.primary ? cyan : mint)};
color: ${(props) => (props.primary ? white : cerulean)};
border: none;
border-radius: 60px;
font-family: ${(props) => (props.primary ? primaryFont : primaryFont)};
letter-spacing: 0.0357143em;
text-transform: uppercase;
width: 311px;
height: 53px;
`;

function LoginButton() {
  return (
    <>
      <Button primary onClick={props.handleClick}>
        {props.action}
      </Button>
    </>
  );
}

export default LoginButton;

Button.PropTypes = {
  onClick: PropTypes.function.isRequired,
  action: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

Button.defaultProps = {
  theme: "default",
};
