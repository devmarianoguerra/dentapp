import React from "react";
import { FaUserAlt } from "react-icons/fa";
import Styled from "styled-components";
import PropTypes from "prop-types";

const Icon = Styled.button`
border-radius: ${(props) => props.borderRadius};
border: ${(props) => props.border};
background-color: ${(props) => props.backgroundColor};
color: ${(props) => props.color};
padding: ${(props) => props.padding} ;
font-size: ${(props) => props.fontSize};
`;

function UserButton() {
  const {
    backgroundColor,
    borderRadius,
    border,
    color,
    padding,
    fontSize,
    onClick,
  } = this.props;
  return (
    <Icon
      onClick={onClick}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border}
      color={color}
      padding={padding}
      fontSize={fontSize}
    >
      <FaUserAlt />
    </Icon>
  );
}

export default UserButton;

UserButton.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
  border: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
