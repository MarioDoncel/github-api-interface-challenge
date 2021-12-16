import styled from 'styled-components';


export const UserDataContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .stat{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    p {
        color: ${({theme})=> theme.color.primary};
    }
    span{
        display: block;
        text-align:center;
        text-shadow:0px 0px 8px rgba(255, 255, 255, 0.49); 
        margin-top: 0.6rem;
    }

`;
