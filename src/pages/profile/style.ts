import styled from 'styled-components';
import profile from '../../assets/profile.jpg'
export const ProfileContainer = styled.div`
    width: 70%;
    /* min-height:500px ; */
    background-color: ${({theme}) => theme.color.primaryDarker };
    border-radius: 10px;
    position: relative;

   .photo{
        position: absolute;
        top: -87px;
        left:0;
        right:0;
        margin-left:auto;
        margin-right:auto;
    }

    .name{
        
        margin: 100px 10% 0;
        text-transform: uppercase;
        text-align:center;
        font-size:2.4rem;
        color: #fff;
        text-shadow:0px 0px 15px rgba(255, 255, 255, 0.7); 
    }

    .container{
        display: flex;
        flex-direction: column;
        width: 80%;
        gap: 1.8rem;
        margin: 3.5rem auto
    }

    .buttons{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    @media(min-width:600px){
        .container{
            margin: 1.5rem auto
        }
    }
`;
