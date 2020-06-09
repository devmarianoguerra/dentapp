import React from "react";
import Styled from "styled-components";

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
  text-decoration-line: underline;
  text-transform: uppercase;
  `;
  return (
    <>
      <ActionText>Continuar sin identificarme</ActionText>
    </>
  );
}

export default CallToActionText;
