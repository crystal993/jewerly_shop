import React, { ChangeEvent } from "react";
import styled from "styled-components";

export interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string | undefined;
  type: string | (string & {}) | undefined;
  placeholder: string | undefined;
  required: true | false;
  value: string | number | readonly string[] | undefined;
  width: string | number | undefined;
  height: string | number | undefined;
}

function Input({ onChange, name, type, placeholder, required, value, width, height }: InputProps) {
  return (
    <>
      <InputElement
        name={name}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
        width={width}
        height={height}
        required={required}
      />
    </>
  );
}

const InputElement = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-sizing: border-box;
  padding: 0;
  position: relative;
  display: inline-block;
  padding: 0.4rem 1.1rem;
  color: rgba(0, 0, 0, 0.85);
  font-size: ${({ theme }) => theme.fontSize.lg};
  background-color: #fff;
  transition: all 0.3s;
  border: 2px solid ${({ theme }) => theme.gray};
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
  }
  &:hover {
    border-color: ${({ theme }) => theme.mainColor};
  }
  &:focus {
    border-color: ${({ theme }) => theme.mainColor};
    outline: none;
  }
  &::placeholder {
    color: #eae0e0;
  }
`;

export default Input;
