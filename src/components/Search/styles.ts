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
            border: 1px solid rgba(0,0,0,0.1)
        }
        button{
            width: 30%;
            padding: 1.2rem;
            background-color: ${({theme})=> theme.color.primaryDarker};
            cursor: pointer;
            filter: brightness(90%);
            transition: text-shadow 400ms;
            transition: font-weight 200ms;
            letter-spacing: 0.1rem;
            font-size: 1.5rem;
                :hover{
                    text-shadow:0px 0px 15px rgba(255, 255, 255, 0.4);
                    font-weight:bold;
                    filter: brightness(100%);
                }
        }
        @media(min-width:600px){
            margin: 1.5rem auto 6rem;
        }
`;
