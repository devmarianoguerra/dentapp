import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";

function CallToActionText() {
  const ActionText = Styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-decoration-line: none;
  text-transform: uppercase;
  color: ${(props) => (props.theme ? "black" : "red")}

  &:hover{
    text-decoration-line: underline;
  }
  `;
  return (
    <>
      <ActionText onClick={props.handleClick}>{props.callToAction}</ActionText>
    </>
  );
}

export default CallToActionText;

CallToActionText.propTypes = {
  theme: PropTypes.color({
    primary: PropTypes.string.isRequired,
    warning: PropTypes.string.isRequired,
  }),
  underline: PropTypes.string,
  callToAction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
