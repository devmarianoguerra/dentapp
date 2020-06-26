import React from "react";
import { MdShoppingCart } from "react-icons/md";
import Styled from "styled-components";
import Proptypes from "prop-types";

const Icon = Styled.button`
border: ${(props) => props.border};
background-color: ${(props) => props.backgroundColor};
color: ${(props) => props.color};
font-size: ${(props) => props.fontSize};
`;

function ShoppingButton() {
  const { backgroundColor, color, border, onClick, fontSize } = this.props;
  return (
    <Icon
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      border={border}
      fontSize={fontSize}
    >
      <MdShoppingCart />
    </Icon>
  );
}

export default ShoppingButton;

ShoppingButton.propTypes = {
  backgroundColor: Proptypes.string.isRequired,
  color: Proptypes.string.isRequired,
  border: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
  fontSize: Proptypes.string.isRequired,
};
