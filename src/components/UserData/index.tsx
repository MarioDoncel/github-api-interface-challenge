import React, { HtmlHTMLAttributes, useContext } from 'react';
import UserContext from '../../providers/userDataProvider';

import { UserDataContainer } from './styles';


const UserData = () => {
  const {user} = useContext(UserContext)
  return (
    <UserDataContainer>
        <p>Username: <span> {user.login? user.login : 'Search for a valid user!'}</span> </p>
        <p>Company: <span> {user.company? user.company: 'None'}</span> </p>
        <p>Location: <span> {user.location? user.location: 'None'}</span> </p>
        <p>Blog:  <a href={user.blog? user.blog: '#'}>{user.blog? user.blog: 'None'}</a> </p>
    </UserDataContainer>
  );
}

export default UserData;