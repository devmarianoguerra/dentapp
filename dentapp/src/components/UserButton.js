import React from "react";
import { FaUserAlt } from "react-icons/fa";
import Styled from "styled-components";

const Icon = Styled.button`
border-radius: 50px;
border: 1px solid #00D9CC;
background-color: transparent;
color: #00D9CC;
margin: 5px;
padding: 6px 12px 11px 12px ;
font-size: 16px;
`;

function UserButton() {
  return (
    <Icon>
      <FaUserAlt />
    </Icon>
  );
}

export default UserButton;
