import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 30rem;
    height: 15rem;
    border-radius: 10px;
    background-color: ${({theme})=> theme.color.primaryDarker};


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2,p,a{
        width: 80%;
    }

    h2{
        margin-bottom: 1rem;
    }
    p{
        color: ${({theme})=> theme.color.primaryText};
        line-height: 1.8rem;
    }
    a{
        text-decoration: underline;
    }

`;
