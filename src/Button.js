import React from "react";
import styled from "styled-components";

const defaultColor = "white";
const defaultTextColor = "black";
const defaultBorderColor = "#CCC";

const ButtonWrapper = styled.div`
  
  background-image: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
  border-radius: 2px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  padding: 6px 12px;
  text-align: center;
  border: ${props => !props.color && `1px solid ${defaultBorderColor}`};
  background-color: ${props => props.color ? props.color : defaultColor};
  color: ${props => props.textColor ? props.textColor : defaultTextColor};
  width: ${props => props.width ? props.width : "fit-content"};
  opacity: ${props => props.disabled && 0.4};

  &:hover:not([disabled]){
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }

  &:active:not([disabled]){
    box-shadow: none;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.26) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;

const Button = props => (
  <ButtonWrapper
    color={props.color}
    textColor={props.textColor}
    width={props.width}
    disabled={props.disabled}
    onClick={props.handleClick}
  >
    {props.children}
  </ButtonWrapper>
);

export default Button;
