
import React,{createContext,useState} from 'react';
interface IUserContext{
    login: string
    avatar_url: string
    name: string,
    company: string,
    blog: string,
    location:string,
    email: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
}

type PropsUserContext = {
    user: IUserContext,
    setUser: React.Dispatch<React.SetStateAction<IUserContext>>
}
const DEFAULT_VALUE = {
    user: {
        login: '',
        avatar_url: '',
        name: '',
        company: '',
        blog: '',
        location:'',
        email: '',
        public_repos: 0,
        public_gists: 0,
        followers: 0,
        following: 0,
    },
    setUser: () => {}
}


const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE)

const UserDataProvider:React.FC = ({children}) => {
    const [user, setUser] = useState(DEFAULT_VALUE.user)

  return (
      <UserContext.Provider value={{user,setUser}}>
          {children}
      </UserContext.Provider>
  );
}

export default UserContext;
export {UserDataProvider}
