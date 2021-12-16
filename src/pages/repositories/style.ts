import styled from 'styled-components';

export const RepositoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .back{
    position: absolute;
    top: 3rem;
    left: 3rem;
    font-size: 2.4rem;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    opacity: 0.8;
    transition: opacity 300ms;

    cursor: pointer;
    img{
      filter: brightness(0) invert(1);
    }
    :hover{
      opacity: 1;
      text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.7);
    }
  }
`;
