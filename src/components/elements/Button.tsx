import React, { MouseEvent } from "react";
import { forwardRef } from "react";
import styled, { css } from "styled-components";

export interface IButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "gray";
  size?: "sm" | "md" | "lg";
  color?: "blue" | "black";
  content?: string;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { variant = "primary", size = "md", color = "blue", content, fullWidth } = props;
  return (
    <ButtonElement variant={variant} size={size} color={color} ref={ref} fullWidth={fullWidth}>
      {content}
    </ButtonElement>
  );
});

const ButtonElement = styled.button<IButtonProps>`
  font-weight: 500;
  transition: 100ms ease-out;
  cursor: pointer;
  ${({ size }) => {
    switch (size) {
      case "sm": {
        return css`
          width: 150px;
          height: 40px;
        `;
      }
      case "md": {
        return css`
          width: 300px;
          height: 40px;
        `;
      }
      case "lg": {
        return css`
          width: 500px;
          height: 40px;
        `;
      }
    }
  }}
  ${({ variant, theme }) => {
    switch (variant) {
      case "primary": {
        return css`
          border-color: ${theme.colors.black};
          background-color: ${theme.colors.black};
          color: ${theme.colors.white};
          transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
            color 0.15s ease-in-out;
        `;
      }
      case "gray": {
        return css`
          border-color: ${theme.colors.zinc_500};
          background-color: ${theme.colors.white};
          color: ${theme.colors.zinc_500};
          transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
            color 0.15s ease-in-out;
          &:hover {
            border-color: ${theme.colors.zinc_700};
            background-color: ${theme.colors.white};
            color: ${theme.colors.zinc_700};
          }
        `;
      }
    }
  }}
`;

export default Button;
