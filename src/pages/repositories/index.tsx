import React from 'react';
import backIcon from '../../assets/skip-back.svg'
import { RepositoriesContainer } from './style';

export const Repositories: React.FC = () => {
  return (
    <RepositoriesContainer>
      <p className='back'><img src={backIcon} alt="" /> BACK</p>
      <div>dadada</div>

     
    </RepositoriesContainer>
  );
}

