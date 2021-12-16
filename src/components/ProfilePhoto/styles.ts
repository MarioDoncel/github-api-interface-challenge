import styled from 'styled-components';
import profile from '../../assets/profile.jpg'

export const PhotoContainer = styled.div`
        height: 175px;
        width: 175px;
        clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
        background-image: url(${profile});
        background-size: cover;
        background-position: center;
`;
