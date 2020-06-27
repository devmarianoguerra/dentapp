import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function createBackButton(color) {
  return (
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <path
        d="M8.7525 1.90245L7.425 0.574951L0 7.99995L7.425 15.425L8.7525 14.0975L2.655 7.99995L8.7525 1.90245Z"
        fill={color}
    />
    </svg>
  );
}

const HeadStyled = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.iconAndTitleColor};
`;


class ProductCard extends Component {
  state = {};

  render() {
    const {
      backgroundColor,
      iconAndTitleColor,
      routeToNavigate,
      children,
    } = this.props;
    return (
      <HeadStyled backgroundColor={backgroundColor} color={iconAndTitleColor}>
        <Navbar expand className="flex-wrap">
          <Container fluid>
            <LinkContainer to={routeToNavigate}>
              <Button variant="link">
                {createBackButton(iconAndTitleColor)}
              </Button>
            </LinkContainer>
          </Container>

          <Container fluid>{children}</Container>
        </Navbar>
      </HeadStyled>
    );
  }
}

ProductCard.propTypes = {
  backgroundColor: PropTypes.string,
  iconAndTitleColor: PropTypes.string,
  routeToNavigate: PropTypes.string,
};

export default ProductCard;
