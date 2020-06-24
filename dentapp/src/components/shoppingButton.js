import React from "react";
import { MdShoppingCart } from "react-icons/md";
import Styled from "styled-components";

const Icon = Styled.button`
border: none;
background-color: transparent;
color: #4A4A4A;
font-size: 20px;
`;

function ShoppingButton() {
  return (
    <Icon>
      <MdShoppingCart />
    </Icon>
  );
}

export default ShoppingButton;
