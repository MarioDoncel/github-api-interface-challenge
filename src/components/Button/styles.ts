import styled from 'styled-components';

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: clamp(9.5rem, 30%, 40rem) ;
    padding: 2.5rem;
    
    background-color: ${({theme})=>theme.color.primary};
    color: ${({theme})=> theme.color.primaryDarker};
    border-radius: 10px;
    box-shadow: 0.4rem 0.4rem 0px rgba(0, 0, 0, 0.25);
    transition: 300ms;

    :hover{
        cursor: pointer;
        font-weight: bold;
        transform: translate(0.4rem, 0.4rem);
        box-shadow: none
    }
`;
