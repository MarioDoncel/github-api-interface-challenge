import React, { Fragment } from 'react';
import ProfilePhoto from '../../components/ProfilePhoto';
import UserData from '../../components/UserData';
import UserStats from '../../components/UserStats';
import Button from '../../components/Button';
import Search from '../../components/Search';
import { ProfileContainer } from './style';

export const Profile: React.FC = () => {
  return (
    <Fragment>
      <Search/>
      <ProfileContainer>
        <ProfilePhoto className='photo' />
        <div className="name">Mario doncel</div>
        <div className="container">
          <UserData />
          <UserStats />
          <div className="buttons">
            <Button>Repositories</Button>
            <Button>Starred</Button>
          </div>{/* Buttons */}
        </div>{/* Container */}
      </ProfileContainer>
    </Fragment>


  );
}

