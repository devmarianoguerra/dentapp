import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import Styled from "styled-components";
import PropTypes from "prop-types";

const darkgrey = "#4A4A4A";
const cyan = " #00D9CC";

const Icon = Styled.button`
border-radius: ${(props) => (props.borderRadius ? true : false)};
color: ${(props) => (props.color ? cyan : darkgrey)};
font-size: ${(props) => (props.fontSize ? "16px" : "20px")}
`;

function IconButton() {
  const { fontSize, borderRadius, color, onClick } = this.props;
  return (
    <Icon
      onClick={onClick}
      rounded={borderRadius}
      color={color}
      size={fontSize}
      userIcon={<FaUserAlt />}
      shoppingIcon={<MdShoppingCart />}
    ></Icon>
  );
}

export default IconButton;

IconButton.propTypes = {
  borderRadius: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  fontSize: PropTypes.number.isRequired,
  userIcon: PropTypes.string,
  shoppingIcon: PropTypes.string,
};
