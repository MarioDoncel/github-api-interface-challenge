import styled from 'styled-components';


export const UserDataContainer = styled.div`
    p {
        color: ${({theme})=> theme.color.primary};
        line-height: 1.8rem;
    }
    a{
        text-decoration: underline
    }
`;
