import React, { useContext, useState } from 'react';
import UserContext from '../../providers/userDataProvider';

import { SearchContainer } from './styles';

const Search = () => {
    const {user,setUser} = useContext(UserContext)
    const [parameter, setParameter] = useState('')

  const searchParameters = async (e:React.ChangeEvent<HTMLElement>) => {
    const element = e.target as HTMLInputElement
    setParameter(element.value)
  }
  const getUserData = async () => {
    const data = await fetch(`${process.env.REACT_APP_BASE_URL}${parameter}`).then(res=>res.json())
    const newUser= {
        login: data.login,
        avatar_url: data.avatar_url,
        name: data.name,
        company: data.company,
        blog: data.blog,
        location:data.location,
        email: data.email,
        public_repos: data.public_repos,
        public_gists: data.public_gists,
        followers: data.followers,
        following: data.following,
    }
    setUser(newUser)
  }

  return (
    <SearchContainer>
        <input type="text" onChange={searchParameters}/>
        <button onClick={getUserData}>
            Search
        </button>
    </SearchContainer>
    )
}

export default Search;