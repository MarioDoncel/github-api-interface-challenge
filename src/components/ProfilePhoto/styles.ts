import styled from 'styled-components';

interface IPhotoContainer {
        avatar_url: string
}

export const PhotoContainer = styled.div<IPhotoContainer>`
        height: 175px;
        width: 175px;
        clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
        background-image: url(${props=>props.avatar_url});
        background-size: cover;
        background-position: center;
`;
