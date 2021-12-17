import React, { useContext } from 'react';
import UserContext from '../../providers/userDataProvider';

import { UserDataContainer } from './styles';

const UserStats = () => {
  const {user,setUser} = useContext(UserContext)
  return (
    <UserDataContainer>
      <div className="stat">
        <p>Followers <span> {user.followers}</span> </p>
      </div>
      <div className="stat">
        <p>Followings <span> {user.following}</span> </p>
      </div>
      <div className="stat">
        <p>Gists <span> {user.public_gists}</span> </p>
      </div>
      <div className="stat">
        <p>Repos  <span>{user.public_repos}</span> </p>
      </div>
    </UserDataContainer>
  );
}

export default UserStats;