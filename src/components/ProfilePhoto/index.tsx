import React, { HtmlHTMLAttributes } from 'react';

import { PhotoContainer } from './styles';


const ProfilePhoto = (props: HtmlHTMLAttributes<HTMLDivElement>) => {
  return <PhotoContainer {...props} />;
}

export default ProfilePhoto;