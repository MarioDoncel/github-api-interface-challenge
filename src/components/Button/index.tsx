import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

const Button: React.FC = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
        <ButtonContainer {...props}>
            {props.children}
        </ButtonContainer>
    )
}

export default Button;