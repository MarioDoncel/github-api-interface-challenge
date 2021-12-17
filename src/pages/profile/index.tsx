import React, { Fragment, useContext } from 'react';
import ProfilePhoto from '../../components/ProfilePhoto';
import UserData from '../../components/UserData';
import UserStats from '../../components/UserStats';
import Button from '../../components/Button';
import Search from '../../components/Search';
import { ProfileContainer } from './style';
import {useNavigate } from 'react-router-dom';
import UserContext from '../../providers/userDataProvider';

export const Profile: React.FC = () => {
  const navigate = useNavigate()
  const {user} = useContext(UserContext)

  const goTo = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    navigate(`/${target.innerText}`);  
  };
 
  return (
    <Fragment>
      <Search/>
      <ProfileContainer >
        <ProfilePhoto className='photo' />
        <div className="name">{user.name}</div>
        <div className="container">
          <UserData />
          <UserStats />
          <div className="buttons">
            <Button type='button' onClick={goTo}>Repositories</Button>
            <Button type='button' onClick={goTo}>Starred</Button>
          </div>{/* Buttons */}
        </div>{/* Container */}
      </ProfileContainer>
    </Fragment>


  );
}

