import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/skip-back.svg'
import Card from '../../components/Card';
import UserContext from '../../providers/userDataProvider';
import { RepositoriesContainer } from './style';

interface IRepositories{
  starred?: boolean
}

export const Repositories = ({starred}:IRepositories) => {
  if(starred) console.log("WORKS")
  const {user} = useContext(UserContext)
  const [repos, setRepos] = useState([])

  type TRepository = {
    name: string, full_name: string, owner: {url:string}
  }

  const getRepoData = async () => {
    let search =''
    starred? search = '/starred' : search = '/repos'

    const data = await fetch(`${process.env.REACT_APP_BASE_URL}${user.login}${search}`).then(res=>res.json())
    const newRepos = data.map((repositorie: TRepository) => ({
      name: repositorie.name,
      full_name: repositorie.full_name,
      url: repositorie.owner.url
      })
    )
    console.log(data)
    setRepos(newRepos)
  }
  useEffect(()=>{
    getRepoData()
  },[user])

  const repositories =Array(12).fill('')
  return (
    <RepositoriesContainer>
      <Link to="/"><p className='back'><img src={backIcon} alt="" /> BACK</p></Link>
      <div className="safeArea"></div>
      {repos.map(({name, full_name, url}, index) => 
        (<Card name={name} full_name={full_name} url={url} key={index}/>))}

      {/* <Card/> */}
      {/* {repositories.map((repo,index) => <Card key={index}/>)}
      */}
    </RepositoriesContainer>
  );
}

