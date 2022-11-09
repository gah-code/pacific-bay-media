import React from 'react';
import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;

  ${(props) => {
    if (props.variant === 'primary') {
      return css`
        background-color: #5072a7;
      `;
      color: white;
    }
    if (props.variant === 'secondary') {
      return css`
        background-color: #645cff;
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
