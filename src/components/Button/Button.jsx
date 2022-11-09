import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './Button.style';

const Button = ({ variant, children, ...restProps }) => {
  return (
    <div>
      <ButtonWrapper variant={variant} {...restProps}>
        {children}
      </ButtonWrapper>
    </div>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};

Button.propTypes = {
  variant: null,
  children: null,
};

export default Button;
