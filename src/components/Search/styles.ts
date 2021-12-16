import styled from 'styled-components';

export const SearchContainer = styled.div`
        width: 70%;
        margin: 3rem auto 12rem;
        align-self: flex-start;
        justify-self: flex-start;
        input{
            width: 60%;
            margin-right: 10%;
            padding: 1.5rem;
            border-radius: 10px;
            color: ${({theme})=> theme.color.primaryDarker};
        }
        button{
            width: 30%;
            padding: 1.5rem;
            background-color: ${({theme})=> theme.color.primaryDarker};
        }
`;
