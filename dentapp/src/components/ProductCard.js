import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'


const ProductBox = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    background: #FFFFFF;
    border: .1em solid #F3F3F3;
    border-radius: 1em;
    margin: 15px;
    padding: 5px;

    img {
      width: 10em;
      height: auto;
    }

    h6 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 10px;
      line-height: 11px;
      text-align: center;
    }

    .green{
      color: #00d9cc;
    }

    .grey{
      color: #4A4A4A;
    }
`;


class ProductCard extends Component {
  state = {};

  render() {
    const {
      title,
      price,
      img,
      onClick,
    } = this.props;
    return (
      <div className="d-flex text-center font-weight-bold">
        <Col xs={4} md={3} className="justify-content-center">
          <ProductBox >
            <Row className="justify-content-center">
              <Image className="img-fluid" src={img} />
            </Row>
            <Row className="justify-content-center green">
              <h5>{price}</h5>
            </Row>
            <Row className="justify-content-center grey">
              <h5 className="px-4 text-wrap">{title}</h5>
            </Row>
            <Row className="justify-content-center mb-2">
              <LinkContainer to={onClick}>
                <Button variant="light"> Ver
                </Button>
              </LinkContainer>
            </Row>
          </ProductBox>
        </Col>
      </div>
    );
  }
}

ProductCard.propTypes = {
  backgroundColor: PropTypes.string,
  iconAndTitleColor: PropTypes.string,
  routeToNavigate: PropTypes.string,
};

export default ProductCard;
