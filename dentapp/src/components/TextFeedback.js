import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Success from "../assets/Success.svg";

const TextContainer = styled.div`
  color: ${(props) => props.color};
  ${(props) => props.error && "text-decoration: underline;"}
`;

class TextFeedback extends Component {
  state = {
    status: this.props.status,
    text: this.props.text,
  };

  render() {
    const { status, text } = this.state;
    return (
      <>
        {status === "success" && (
          <Container className="text-center">
            <img src={Success} alt="Success" />

            <TextContainer color="#00D9CC">
              <h1>¡Listo!</h1>
            </TextContainer>

            <TextContainer color="#70757af0">
              <p>{text}</p>
            </TextContainer>

          </Container>
        )}

        {status === "error" && (
          <TextContainer error color="#FF5555">
            <p>{text}</p>
          </TextContainer>
        )}
      </>
    );
  }
}

TextFeedback.propTypes = {
  status: PropTypes.string,
  text: PropTypes.string,
};

export default TextFeedback;
