import React from 'react'
import styled from 'styled-components';

function Button(name, onClick, icon, bg, type, disabled) {
  return (
    <ButtonStyled 
    style={{background: bg}} 
    onClick={onClick} 
    type={type} 
    disabled={disabled}
    >
        {icon}
        {name}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`

`;

export default Button
