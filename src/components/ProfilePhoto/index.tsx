import React, { HtmlHTMLAttributes, useContext } from 'react';
import UserContext from '../../providers/userDataProvider';

import { PhotoContainer } from './styles';


const ProfilePhoto = (props: HtmlHTMLAttributes<HTMLDivElement>) => {
  const {user} = useContext(UserContext)
  const imgPlaceholder = 'https://via.placeholder.com/150'

  return <PhotoContainer {...props} avatar_url={user.avatar_url? user.avatar_url : imgPlaceholder}/>
}

export default ProfilePhoto;