import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";

const Icon = Styled.div`
color: ${(props) => props.color};
font-size: ${(props) => props.size};

`;

const IconContainer = Styled.div`
border-radius: ${(props) => props.rounded && "500px"};
border: ${(props) => props.rounded && "solid 1px " + props.color};
width: ${(props) => props.rounded && "200px"};
height: ${(props) => props.rounded && "200px"};
padding: ${(props) => props.centered && "11px 48px"}
`;

function IconButton(props) {
  const { size, rounded, color, onClick, icon, centered } = props;
  return (
    <>
      <Icon onClick={onClick} size={size} color={color}>
        <IconContainer
          rounded={rounded}
          color={color}
          size={size}
          centered={centered}
        >
          {icon}
        </IconContainer>
      </Icon>
    </>
  );
}

export default IconButton;

IconButton.propTypes = {
  rounded: PropTypes.bool,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  centered: PropTypes.bool,
};

IconButton.defaultProps = {
  rounded: false,
  centered: false,
};
