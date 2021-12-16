import React from 'react';

import { UserDataContainer } from './styles';

const UserStats = () => {
  return (
    <UserDataContainer>
      <div className="stat">
        <p>Followers <span> 38</span> </p>
      </div>
      <div className="stat">
        <p>Followings <span> 21</span> </p>
      </div>
      <div className="stat">
        <p>Gists <span> 3</span> </p>
      </div>
      <div className="stat">
        <p>Repos  <span>32</span> </p>
      </div>
    </UserDataContainer>
  );
}

export default UserStats;