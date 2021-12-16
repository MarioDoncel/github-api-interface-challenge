import React, { HtmlHTMLAttributes } from 'react';

import { UserDataContainer } from './styles';


const UserData = () => {
  return (
    <UserDataContainer>
      
        <p>Username: <span> MarioDoncel</span> </p>
        <p>Company: <span> @INSS</span> </p>
        <p>Location: <span> Brazil</span> </p>
        <p>Blog:  <a href="https://www.blog.com">https://www.blog.com</a> </p>
  
    </UserDataContainer>
  );
}

export default UserData;