import {
  HashRouter,
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import {Profile, Repositories} from '../pages/index';


  export const Router = ()=>{
    return(
      <HashRouter>
        <Routes>
          <Route path="/" element={< Profile />}/>
          <Route path="/repositories" element={<Repositories />}/>
          <Route path="/starred" element={<Repositories starred={true} />}/>
        </Routes>
      </HashRouter>
    )
  }

  export default Router
  