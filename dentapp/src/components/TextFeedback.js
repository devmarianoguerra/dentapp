import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "react-bootstrap/Container";
import SuccessIcon from "../assets/Success.svg";

const TextContainer = styled.div`
  color: ${(props) => props.color};
  ${(props) => props.error && "text-decoration: underline;"}
`;

function TextFeedback (props){
  
    const { status, text, title } = this.props;
    const primaryColor = "#00D9CC"; //green color
    const secundaryColor = "#70757af0"; //grey color
    const errorColor = "#FF5555"; //red color
    return (
      <>
        {status === "success" && (
          <Container className="text-center">
            <img src={SuccessIcon} alt="Success icon" />

            <TextContainer color={primaryColor}>
              <h1>{title}</h1>
            </TextContainer>

            <TextContainer color={secundaryColor}>
              <p>{text}</p>
            </TextContainer>
          </Container>
        )}

        {status === "error" && (
          <TextContainer error color={errorColor}>
            <p>{text}</p>
          </TextContainer>
        )}
      </>
    );
  }


TextFeedback.propTypes = {
  status: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

TextFeedback.defaultProps = {
  title: "¡Listo!",
};

export default TextFeedback;
