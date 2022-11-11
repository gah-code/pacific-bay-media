import React from 'react';
import styled, { css } from 'styled-components';
// import sass from 'sass';

// import '../../main.scss';

export const ButtonWrapper = styled.button`
  display: inline-block;
  background-color: #5072a7;
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: 500;
  border: none;
  padding: 1.25rem 4.5rem;
  border-radius: 10rem;
  cursor: pointer;
  color: #f4f4f4;

  transition: all 0.3s;

  &:hover {
    background-color: #444;
  }

  ${(props) => {
    if (props.variant === 'primary') {
      return css`
        background-color: #5072a7;
      `;
      color: white;
    }
    if (props.variant === 'secondary') {
      return css`
        color: #5072a7;
        font-size: 1.7rem;
        border: none;
        border-bottom: 1px solid currentColor;
        padding-bottom: 2px;
      `;
    }

    if (props.variant === 'navigation') {
      return css`
        color: #222;
        background-color: #5072a7;
        font-size: 1.7rem;
        border: none;
        font-weight: 400;
        padding: 0.8rem 2.5rem;
        border-radius: 3rem;
      `;
    }
  }}
`;

// export const RedButton = styled(Button)`
//   width: 400px;
//   background: transparent;
//   color: red;
//   border: 1px solid;
// `;
